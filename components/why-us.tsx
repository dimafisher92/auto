import Image from "next/image"
import { CheckCircle } from "lucide-react"

const reasons = [
  "Досвідчені сертифіковані майстри",
  "Сучасне діагностичне обладнання",
  "Оригінальні запчастини та матеріали",
  "Прозоре ціноутворення без прихованих платежів",
  "Гарантія на всі виконані роботи",
  "Індивідуальний підхід до кожного клієнта",
]

export function WhyUs() {
  return (
    <section id="why-us" className="scroll-mt-20 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text */}
          <div>
            <h2 className="font-heading text-3xl font-bold uppercase tracking-wide text-foreground sm:text-4xl lg:text-5xl">
              Чому обирають{" "}
              <span className="text-primary">4GEAR</span>?
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Коли справа стосується ремонту автомобіля, вибір автосервісу — це питання довіри. Ми пишаємося нашою репутацією та довгостроковими відносинами з клієнтами. Наша мета — не просто ремонт, а повна задоволеність кожного, хто довіряє нам свій автомобіль.
            </p>

            <ul className="mt-8 flex flex-col gap-4">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-foreground">{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/why-us.jpg"
              alt="Професійне обладнання автосервісу 4GEAR"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-border" />
          </div>
        </div>
      </div>
    </section>
  )
}
