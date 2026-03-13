"use client";

import dynamic from "next/dynamic";
import React, { useMemo } from "react";

// dynamic import (fixes SSR issues in Next.js)
const ReactECharts = dynamic(
    () => import("echarts-for-react"),
    { ssr: false }
);

interface StackedBarChartProps {
    data?: Array<{ label: string; value: number; color: string }>;
    height?: number;
    showLegend?: boolean;
    className?: string;
}

export default function StackedBarChart({
    data = [],
    height = 24,
    showLegend = true,
    className = "",
}: StackedBarChartProps) {
    const total = useMemo(
        () => data.reduce((sum, item) => sum + item.value, 0),
        [data]
    );

    const option = useMemo(() => ({
        animation: true,

        grid: {
            left: 0,
            right: 0,
            top: showLegend ? 30 : 0,
            bottom: showLegend ? 20 : 0,
            containLabel: false,
        },

        tooltip: {
            trigger: "item",
            formatter: ({ seriesName, value }:{value:number; seriesName: string; }) => {
                const percent = ((value / total) * 100).toFixed(1);
                return `${seriesName}<br/>${value} (${percent}%)`;
            },
        },

        legend: showLegend
            ? {
                show: true,
                bottom: 0,
                left: "left",
                icon: "roundRect",
                itemWidth: 12,
                itemHeight: 12,
                textStyle: {
                    fontSize: 13,
                    color: "#6B7280",
                },
            }
            : { show: false },

        xAxis: {
            type: "value",
            show: false,
            max: total,
        },

        yAxis: {
            type: "category",
            show: false,
            data: ["total"],
        },

        series: data.map((item, index) => ({
            name: item.label,
            type: "bar",
            stack: "total",
            data: [item.value],
            barWidth: height,
            emphasis: { disabled: true },

            itemStyle: {
                color: item.color,

                borderRadius:
                    index === 0
                        ? [height / 2, 0, 0, height / 2]
                        : index === data.length - 1
                            ? [0, height / 2, height / 2, 0]
                            : [0, 0, 0, 0],
            },
        })),
    }), [data, height, showLegend, total]);

    return (
        <div className={`w-full ${className}`}>
            <ReactECharts
                option={option}
                style={{ width: "100%", height: height + (showLegend ? 40 : 0) }}
                opts={{ renderer: "svg" }}
            />
        </div>
    );
}
