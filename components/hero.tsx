import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 text-center sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold uppercase tracking-wide text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance">
          Ваш надійний{" "}
          <span className="text-primary">автосервіс</span>{" "}
          в Одесі
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          4GEAR — професійний автосервіс повного циклу. Діагностика, ремонт та обслуговування вашого автомобіля на найвищому рівні.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base px-8 py-6"
          >
            <a href="#contacts">Записатись на сервіс</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary/10 font-semibold text-base px-8 py-6"
          >
            <a href="#services">Наші послуги</a>
          </Button>
        </div>

        {/* Reviews indicator */}
        <div className="mt-10 flex items-center justify-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-primary text-primary" />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">60+</span> задоволених клієнтів на Google
          </span>
        </div>
      </div>
    </section>
  )
}
