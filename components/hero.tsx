import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Інтер'єр автосервісу 4GEAR"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#111111]/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 text-center sm:px-6 lg:px-8">
        {/* Large subtle logo watermark */}
        <div className="mx-auto mb-8 w-64 opacity-30 sm:w-80 lg:w-96">
          <Image
            src="/images/logo-yellow.png"
            alt=""
            width={400}
            height={100}
            className="h-auto w-full"
            aria-hidden="true"
          />
        </div>

        <h1 className="font-heading text-4xl font-bold uppercase tracking-wide text-[#f0f0f0] sm:text-5xl md:text-6xl lg:text-7xl text-balance">
          Ваш преміальний{" "}
          <span className="text-[#f0e060]">детейлінг</span>{" "}
          в Одесі
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#c0c0c0] sm:text-xl">
          4GEAR — сервіс преміального догляду та детейлінгу автомобілів. Хімчистка, полірування, кераміка, бронеплівка та повний спектр автосервісних послуг.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            asChild
            size="lg"
            className="bg-[#f0e060] px-8 py-6 text-base font-semibold uppercase tracking-wider text-[#111111] hover:bg-[#f0e060]/90"
          >
            <a href="#how-to-book">Як записатись?</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-[#f0e060] px-8 py-6 text-base font-semibold uppercase tracking-wider text-[#f0e060] hover:bg-[#f0e060]/10"
          >
            <a href="#services">Наші послуги</a>
          </Button>
        </div>

        {/* Reviews indicator */}
        <div className="mt-10 flex items-center justify-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-[#f0e060] text-[#f0e060]" />
            ))}
          </div>
          <span className="text-sm text-[#c0c0c0]">
            <span className="font-semibold text-[#f0f0f0]">60+</span> задоволених клієнтів на Google
          </span>
        </div>
      </div>
    </section>
  )
}
