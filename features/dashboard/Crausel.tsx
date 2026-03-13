
"use client";

import SecHeading from "@/components/common/SecHeading";
import SectionBox from "@/components/common/SectionBox";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

import crausel1 from "@/assets/images/crausel1.png";
import crausel2 from "@/assets/images/crausel2.png";
import crausel3 from "@/assets/images/crausel3.png";
import crausel4 from "@/assets/images/crausel4.png";
import crausel5 from "@/assets/images/crausel5.png";
import crausel6 from "@/assets/images/crausel6.png";
import crausel7 from "@/assets/images/crausel7.png";
import crausel8 from "@/assets/images/crausel8.png";

const images = [
    crausel1,
    crausel2,
    crausel3,
    crausel4,
    crausel5,
    crausel6,
    crausel7,
    crausel8,
];

export default function Crausel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(3);

    const startX = useRef(0);
    const endX = useRef(0);

    useEffect(() => {
        const updateView = () => {
            if (window.innerWidth < 768) setItemsPerView(1);
            else setItemsPerView(3);
        };

        updateView();
        window.addEventListener("resize", updateView);

        return () => window.removeEventListener("resize", updateView);
    }, []);

    const maxIndex = images.length - itemsPerView;

    const nextSlide = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    /* Swipe Handling */
    // const handleMouseDown = (e: any) => {
    //     startX.current = e.clientX;
    // };

    // const handleMouseUp = (e: any) => {
    //     endX.current = e.clientX;
    //     handleSwipe();
    // };

    // const handleTouchStart = (e: any) => {
    //     startX.current = e.touches[0].clientX;
    // };

    // const handleTouchEnd = (e: any) => {
    //     endX.current = e.changedTouches[0].clientX;
    //     handleSwipe();
    // };

    // const handleSwipe = () => {
    //     const distance = startX.current - endX.current;

    //     if (distance > 50) nextSlide();
    //     if (distance < -50) prevSlide();
    // };

    return (
        <SectionBox className="">
            <SecHeading
                Title="Did You Know?"
                desc="Additional clinical context related to your laboratory results."
            />

            <div className="flex items-center gap-3 mt-6">
                {/* LEFT BUTTON */}
                <button
                    onClick={prevSlide}
                    disabled={currentIndex === 0}
                    className="hidden md:flex items-center justify-center bg-white rounded-lg h-10 w-10  disabled:opacity-30"
                >
                    <ChevronLeft size={20} color="black" />
                </button>

                {/* CAROUSEL */}
                <div
                    className="overflow-hidden flex-1"
                    // onMouseDown={handleMouseDown}
                    // onMouseUp={handleMouseUp}
                    // onTouchStart={handleTouchStart}
                    // onTouchEnd={handleTouchEnd}
                >
                    <div
                        className="flex gap-3 transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`,
                        }}
                    >
                        {images.map((img, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-full md:w-[calc((100%-24px)/3)] rounded-lg overflow-hidden"
                            >
                                <Image
                                    src={img}
                                    alt={`Slide ${index}`}
                                    width={500}
                                    height={400}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT BUTTON */}
                <button
                    onClick={nextSlide}
                    disabled={currentIndex === maxIndex}
                    className="hidden md:flex items-center justify-center bg-white rounded-lg h-10 w-10  disabled:opacity-30"
                >
                    <ChevronRight size={20} color="black" />
                </button>
            </div>

            {/* MOBILE DOTS */}
            <div className="flex justify-center mt-4 gap-2 md:hidden">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2 rounded-full transition-all ${currentIndex === index ? "w-4 bg-black" : "w-2 bg-gray-300"
                            }`}
                    />
                ))}
            </div>
        </SectionBox>
    );
}