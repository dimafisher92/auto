import { Button } from "@/components/ui/button"

export function CtaBanner() {
  return (
    <section className="bg-secondary py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold uppercase tracking-wide text-foreground sm:text-4xl text-balance">
          Подбайте про свій автомобіль вже сьогодні
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
          Запишіться на діагностику або ремонт прямо зараз. Ми працюємо щодня, щоб ваш автомобіль був у найкращому стані.
        </p>
        <Button
          asChild
          size="lg"
          className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base px-10 py-6"
        >
          <a href="#contacts">Зв&#39;язатися з нами</a>
        </Button>
      </div>
    </section>
  )
}
