"use client"

import { useState } from "react"
import Image from "next/image"

import { Button } from 'primereact/button'
import { Image as PrimeImage } from 'primereact/image'

import { cn } from "@/lib/utils"

const galleryImages = [
  {
    src: "/gallery/clean-vwing-c.jpg",
    alt: "Clean aircraft wing detail",
    category: "exterior",
  },
  {
    src: "/gallery/cockpit-c.jpg",
    alt: "Professional cockpit detailing",
    category: "interior",
  },
  {
    src: "/gallery/cockpit-man-c.jpg",
    alt: "Pilot in detailed cockpit",
    category: "interior",
  },
  {
    src: "/gallery/twin-jet-c.jpg",
    alt: "Twin jet aircraft exterior",
    category: "exterior",
  },
  {
    src: "/gallery/prop-focus-c.jpg",
    alt: "Aircraft propeller detail",
    category: "specialty",
  },
  {
    src: "/gallery/cockpit-woman-c.jpg",
    alt: "Female pilot in clean cockpit",
    category: "interior",
  },
  {
    src: "/gallery/turbo-prop-c.jpg",
    alt: "Turbo prop aircraft exterior",
    category: "exterior",
  },
  {
    src: "/gallery/heading-indicator-c.jpg",
    alt: "Detailed aircraft instruments",
    category: "specialty",
  },
  {
    src: "/gallery/quad-prop-c.jpg",
    alt: "Four-engine aircraft detail",
    category: "exterior",
  },
  {
    src: "/gallery/open-cockpit-c.jpg",
    alt: "Open cockpit aircraft interior",
    category: "interior",
  },
  {
    src: "/gallery/cowling-inspection-c.jpg",
    alt: "Engine cowling inspection",
    category: "specialty",
  },
  {
    src: "/gallery/sunset-landing-configuration-c.jpg",
    alt: "Aircraft in landing configuration at sunset",
    category: "exterior",
  },
  {
    src: "/gallery/cessna-underbelly-c.jpg",
    alt: "Cessna aircraft underbelly detail",
    category: "exterior",
  },
  {
    src: "/gallery/light-sport-c.jpg",
    alt: "Light sport aircraft",
    category: "exterior",
  },
  {
    src: "/gallery/sweepback-jet-c.jpg",
    alt: "Swept-wing jet aircraft",
    category: "exterior",
  },
  {
    src: "/gallery/v-wing-c.jpg",
    alt: "V-wing aircraft configuration",
    category: "exterior",
  },
]

export function GallerySection() {
  const [filter, setFilter] = useState<string>("all")

  const filteredImages = filter === "all" ? galleryImages : galleryImages.filter((img) => img.category === filter)

  return (
    <section id="gallery" className="py-20 bg-black text-white overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-full">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg group max-w-full"
            >
              <PrimeImage
                src={image.src}
                alt={image.alt}
                width="100%"
                height="100%"
                preview
                className="w-full h-full max-w-full"
                imageClassName="object-cover w-full h-full rounded-lg max-w-full"
                style={{ maxWidth: '100%', width: '100%', height: '100%' }}
              />
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}
