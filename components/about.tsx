import Image from "next/image"
import { Button } from "@/components/ui/button"

export function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-background py-20 lg:py-28">
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
            <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-border" />
          </div>

          {/* Text */}
          <div>
            <h2 className="font-heading text-3xl font-bold uppercase tracking-wide text-foreground sm:text-4xl lg:text-5xl">
              Про <span className="text-primary">нас</span>
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              4GEAR — це сучасний автосервіс в Одесі, який спеціалізується на професійному ремонті та технічному обслуговуванні автомобілів. Ми працюємо з 2019 року і пишаємося високим рівнем довіри наших клієнтів.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Наша команда — це досвідчені майстри з багаторічним стажем, які використовують сучасне обладнання та оригінальні запчастини. Ми гарантуємо якість кожної роботи та прозоре ціноутворення.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Довіряючи свій автомобіль нам, ви отримуєте не просто ремонт, а комплексний підхід до обслуговування вашого транспортного засобу. Ми завжди на зв&#39;язку та готові відповісти на будь-які ваші питання.
            </p>
            <Button
              asChild
              className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
            >
              <a href="#contacts">Дізнатися більше</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
