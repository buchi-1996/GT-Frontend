"use client"

import Image from "next/image"
import type React from "react"
import { useState, useEffect } from "react"
// import { ChevronLeft, ChevronRight } from "lucide-react"
// import { Button } from "@/components/ui/button"

interface ImageCarouselProps {
    images: string[]
    alt: string
    className?: string
    autoSlide?: boolean
    autoSlideInterval?: number
}

export function ListingImageCarousel({
    images,
    alt,
    className = "",
    autoSlide = true,
    autoSlideInterval = 3000,
}: ImageCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isHovered, setIsHovered] = useState(false)
    const [imgError, setImgError] = useState(false);

    useEffect(() => {
        setImgError(false);
    }, [currentIndex]);


    // Auto-slide functionality
    useEffect(() => {
        if (!autoSlide || images.length <= 1 || isHovered) return

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
        }, autoSlideInterval)

        return () => clearInterval(interval)
    }, [autoSlide, autoSlideInterval, images.length, isHovered])

    if (!images || images.length === 0) {
        return (
            <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
                <span className="text-gray-400">No image</span>
            </div>
        )
    }

    if (images.length === 1) {
        return (
            <div className={`relative ${className}`}>
                <Image
                    width={500}
                    height={500}
                    src={images[0] || "/placeholder.svg"}
                    alt={alt}
                    className="w-full h-full object-cover"
                    onError={() => setImgError(true)}
                />
            </div>
        )
    }

    //   const goToPrevious = (e: React.MouseEvent) => {
    //     e.stopPropagation()
    //     setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    //   }

    //   const goToNext = (e: React.MouseEvent) => {
    //     e.stopPropagation()
    //     setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    //   }

    const goToSlide = (index: number, e: React.MouseEvent) => {
        e.stopPropagation()
        setCurrentIndex(index)
    }

    return (
        <div
            className={`relative group ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Main Image */}
            <Image
                width={100}
                height={100}
                src={imgError ? "/placeholder.svg" : images[currentIndex] || "/placeholder.svg"}
                alt={`${alt} - Image ${currentIndex + 1}`}
                className="w-full h-full object-cover transition-opacity duration-300"
                onError={() => setImgError(true)}
            />
            {/* Navigation Arrows
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 h-8 w-8"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 h-8 w-8"
        onClick={goToNext}
      >
        <ChevronRight className="h-4 w-4" />
      </Button> */}

            {/* Dots Indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${index === currentIndex ? "bg-white scale-110" : "bg-white/50 hover:bg-white/75"
                            }`}
                        onClick={(e) => goToSlide(index, e)}
                    />
                ))}
            </div>

            {/* Image Counter */}
            {/* <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
        {currentIndex + 1} / {images.length}
      </div> */}

            {/* Auto-slide indicator */}
            {/* {autoSlide && images.length > 1 && !isHovered && (
        <div className="absolute bottom-0 left-0 h-1 bg-white/30 w-full">
          <div
            className="h-full bg-white transition-all duration-100 ease-linear"
            style={{
              width: `${((currentIndex + 1) / images.length) * 100}%`,
            }}
          />
        </div>
      )} */}
        </div>
    )
}
