"use client"

import { useState } from "react"
import { Instagram, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const instagramPosts = [
  {
    id: 1,
    image: "/images/insta-1.jpg",
    alt: "Ремонт двигуна в автосервісі 4GEAR",
    caption: "Капітальний ремонт двигуна BMW",
  },
  {
    id: 2,
    image: "/images/insta-2.jpg",
    alt: "Діагностика автомобіля в 4GEAR",
    caption: "Комп'ютерна діагностика всіх систем",
  },
  {
    id: 3,
    image: "/images/insta-3.jpg",
    alt: "Ремонт ходової частини в 4GEAR",
    caption: "Заміна елементів підвіски",
  },
  {
    id: 4,
    image: "/images/insta-4.jpg",
    alt: "Технічне обслуговування авто в 4GEAR",
    caption: "Планове ТО за регламентом",
  },
  {
    id: 5,
    image: "/images/insta-5.jpg",
    alt: "Заміна масла та фільтрів в 4GEAR",
    caption: "Заміна масла та фільтрів",
  },
  {
    id: 6,
    image: "/images/insta-6.jpg",
    alt: "Робоче місце майстра 4GEAR",
    caption: "Професійне обладнання",
  },
]

export function InstagramFeed() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="bg-[#1c1c1c] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mx-auto mb-4 flex items-center justify-center gap-3">
            <Instagram className="h-7 w-7 text-[#f0e060]" />
            <span className="font-heading text-lg font-semibold uppercase tracking-wider text-[#c0c0c0]">
              @4gear.odesa
            </span>
          </div>
          <h2 className="font-heading text-3xl font-bold uppercase tracking-wide text-[#f0f0f0] sm:text-4xl lg:text-5xl">
            Ми в <span className="text-[#f0e060]">Instagram</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-[#c0c0c0]">
            Слідкуйте за нашими оновленнями, процесом роботи та корисними порадами для вашого авто.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href="https://www.instagram.com/4gear.odesa"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-lg"
              onMouseEnter={() => setHoveredId(post.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Image
                src={post.image}
                alt={post.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 16vw"
              />
              {/* Hover overlay */}
              <div
                className={`absolute inset-0 flex flex-col items-center justify-center bg-[#111111]/80 p-3 transition-opacity duration-200 ${
                  hoveredId === post.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <Instagram className="mb-2 h-6 w-6 text-[#f0e060]" />
                <p className="text-center text-xs font-medium leading-tight text-[#f0f0f0] sm:text-sm">
                  {post.caption}
                </p>
              </div>
              {/* Bottom border accent */}
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-[#f0e060] opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
          ))}
        </div>

        {/* Follow button */}
        <div className="mt-10 text-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-[#f0e060] px-8 py-6 text-base font-semibold uppercase tracking-wider text-[#f0e060] hover:bg-[#f0e060]/10"
          >
            <a
              href="https://www.instagram.com/4gear.odesa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Instagram className="h-5 w-5" />
              Підписатись
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
