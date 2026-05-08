"use client";

import { useState } from "react";
import { testimonials } from "@/constants/testimonials";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const OurTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = 3;
  const totalSlides = Math.ceil(testimonials.length / cardsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex * cardsPerView,
    currentIndex * cardsPerView + cardsPerView
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-b from-gray-200 to-gray-300 px-8 gap-6">
      <span className="bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 px-6 py-2 rounded-full text-lg font-bold">
        CLIENT TESTIMONIALS
      </span>
      <h2 className="text-4xl font-bold text-black text-center mb-12">
        What Our Clients Say
      </h2>

      {/* Carousel Container */}
      <div className="relative w-full max-w-6xl mx-auto px-12">
        {/* Cards */}
        <div className="flex gap-6">
          {visibleTestimonials.map(({ key, quote, author, firm, software, icon }) => (
            <div 
              key={key} 
              className="flex-1 flex flex-col bg-white p-6 rounded-lg shadow-md h-[400px]"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-indigo-600">{icon}</span>
                </div>
                <blockquote className="text-gray-700 leading-relaxed">
                  {quote}
                </blockquote>
              </div>

              <div className="flex items-center gap-4 mt-6 pt-4 border-t border-gray-200">
                <Image 
                  src={"/profile.png"} 
                  alt={author}
                  className="w-12 h-12 rounded-full object-cover bg-gray-100"
                  width={48}
                  height={48}
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{author}</h3>
                  <p className="text-sm text-gray-500">{firm}</p>
                  <p className="text-sm text-gray-500">{software}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          aria-label="Previous testimonials"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        <button
          onClick={nextSlide}
          disabled={currentIndex === totalSlides - 1}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          aria-label="Next testimonials"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                index === currentIndex ? 'bg-indigo-600' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};