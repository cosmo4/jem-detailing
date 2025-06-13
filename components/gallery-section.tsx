"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

import { Button } from 'primereact/button'

import { cn } from "@/lib/utils"

const galleryImages = [
  {
    src: "/gallery/image1.jpg",
    alt: "Detailed single-engine aircraft exterior",
    category: "exterior",
  },
  {
    src: "/gallery/image2.jpg",
    alt: "Polished private jet interior",
    category: "interior",
  },
  {
    src: "/gallery/image3.jpg",
    alt: "Detailed cockpit of a small aircraft",
    category: "interior",
  },
  {
    src: "/gallery/image4.jpg",
    alt: "Freshly waxed twin-engine aircraft",
    category: "exterior",
  },
  {
    src: "/gallery/image5.jpg",
    alt: "Detailed jet engine",
    category: "specialty",
  },
  {
    src: "/gallery/image6.jpg",
    alt: "Luxury aircraft cabin after detailing",
    category: "interior",
  },
  {
    src: "/gallery/image7.jpg",
    alt: "Before and after of aircraft paint correction",
    category: "exterior",
  },
  {
    src: "/gallery/image8.jpg",
    alt: "Detailed landing gear",
    category: "specialty",
  },
]

export function GallerySection() {
  const [filter, setFilter] = useState<string>("all")
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const filteredImages = filter === "all" ? galleryImages : galleryImages.filter((img) => img.category === filter)

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1))
  }

  return (
    <section id="gallery" className="py-20 bg-black text-white">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Work</h2>
          <p className="mt-4 text-lg text-gray-400">Browse our gallery of premium aircraft detailing</p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm">
            <Button
              text
              className={cn(
                "rounded-l-md rounded-r-none border border-white/20",
                filter === "all" ? "bg-white text-black" : "text-white hover:bg-white/10",
              )}
              onClick={() => setFilter("all")}
              label="All"
            />
            <Button
              text
              className={cn(
                "rounded-none border-y border-r border-white/20",
                filter === "exterior" ? "bg-white text-black" : "text-white hover:bg-white/10",
              )}
              onClick={() => setFilter("exterior")}
              label="Exterior"
            />
            <Button
              text
              className={cn(
                "rounded-none border-y border-r border-white/20",
                filter === "interior" ? "bg-white text-black" : "text-white hover:bg-white/10",
              )}
              onClick={() => setFilter("interior")}
              label="Interior"
            />
            <Button
              text
              className={cn(
                "rounded-r-md rounded-l-none border border-white/20",
                filter === "specialty" ? "bg-white text-black" : "text-white hover:bg-white/10",
              )}
              onClick={() => setFilter("specialty")}
              label="Specialty"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-medium">View Image</span>
              </div>
            </div>
          ))}
        </div>

        {lightboxOpen && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
            <Button
              text
              rounded
              className="absolute top-4 right-4 text-white hover:bg-white/10 p-2"
              onClick={closeLightbox}
              icon={<X className="h-6 w-6" />}
            />

            <Button
              text
              rounded
              className="absolute left-4 text-white hover:bg-white/10 p-2"
              onClick={prevImage}
              icon={<ChevronLeft className="h-8 w-8" />}
            />

            <div className="relative h-[80vh] w-[80vw]">
              <Image
                src={filteredImages[currentImageIndex].src || "/placeholder.svg"}
                alt={filteredImages[currentImageIndex].alt}
                fill
                className="object-contain"
              />
            </div>

            <Button
              text
              rounded
              className="absolute right-4 text-white hover:bg-white/10 p-2"
              onClick={nextImage}
              icon={<ChevronRight className="h-8 w-8" />}
            />

            <div className="absolute bottom-4 text-white text-center">
              <p>{filteredImages[currentImageIndex].alt}</p>
              <p className="text-sm text-gray-400">
                {currentImageIndex + 1} of {filteredImages.length}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
