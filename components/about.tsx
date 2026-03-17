import Image from "next/image"
import { Button } from "@/components/ui/button"

export function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-[#111111] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/about-us.jpg"
              alt="Майстер 4GEAR за роботою в автосервісі"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-[#3c3c3c]" />
          </div>

          {/* Text */}
          <div>
            <h2 className="font-heading text-3xl font-bold uppercase tracking-wide text-[#f0f0f0] sm:text-4xl lg:text-5xl">
              Про <span className="text-[#f0e060]">нас</span>
            </h2>
            <p className="mt-6 leading-relaxed text-[#c0c0c0]">
              4Gear Service — сервіс преміального догляду за автомобілями в Одесі. Основний напрям — автомобільний детейлінг: полірування кузова, керамічне покриття, бронеплівка, антихром, захист скла та фар.
            </p>
            <p className="mt-4 leading-relaxed text-[#c0c0c0]">
              Працюємо з увагою до деталей і результатом, який реально видно. Також через перевірених підрядників закриваємо будь-які додаткові потреби авто: заміна скла, запчастин, технічні роботи та інші послуги — зручно в одному місці.
            </p>
            <p className="mt-4 leading-relaxed text-[#c0c0c0]">
              Працюємо для тих, хто хоче бачити своє авто доглянутим, захищеним і в ідеальному стані.
            </p>
            <Button
              asChild
              className="mt-8 bg-[#f0e060] font-semibold uppercase tracking-wider text-[#111111] hover:bg-[#f0e060]/90"
            >
              <a href="#contacts">Дізнатися більше</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
