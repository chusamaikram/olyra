"use client";

import { useEffect, useState } from "react";

interface Biomarker {
  id: string;
  title: string;
  unit: string;
  status: string;
  category: string
  data: { date: string; value: number | null }[];
  ranges: {
    min: number;
    optimalMin: number;
    optimalMax: number;
    normalMin: number;
    normalMax: number;
    max: number;
  };
  content: { question: string; answer: string | null }[];
}

export function useBiomarkers() {
  const [biomarkers, setBiomarkers] = useState<Biomarker[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/data/biomarkers.json");

        if (!res.ok) throw new Error("Failed to fetch biomarkers");

        const data = await res.json();
        setBiomarkers(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    } 

    fetchData();
  }, []);

  return { biomarkers, loading, error };
}