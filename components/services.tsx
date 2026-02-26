import {
  Wrench,
  Gauge,
  Cog,
  Zap,
  CircleDot,
  ShieldCheck,
  Droplets,
  Car,
} from "lucide-react"

const services = [
  {
    icon: Gauge,
    title: "Діагностика",
    description:
      "Комп'ютерна діагностика всіх систем автомобіля за допомогою сучасного обладнання.",
  },
  {
    icon: Wrench,
    title: "Ремонт двигуна",
    description:
      "Капітальний та поточний ремонт двигунів будь-якої складності.",
  },
  {
    icon: Cog,
    title: "Ходова частина",
    description:
      "Ремонт та заміна елементів підвіски, рульового управління та гальмівної системи.",
  },
  {
    icon: Zap,
    title: "Електрика",
    description:
      "Діагностика та ремонт електрообладнання, встановлення додаткового обладнання.",
  },
  {
    icon: Droplets,
    title: "Заміна масла",
    description:
      "Заміна моторного та трансмісійного масла, фільтрів та технічних рідин.",
  },
  {
    icon: CircleDot,
    title: "Шиномонтаж",
    description:
      "Сезонна заміна шин, балансування коліс, ремонт проколів та порізів.",
  },
  {
    icon: ShieldCheck,
    title: "ТО за регламентом",
    description:
      "Планове технічне обслуговування відповідно до рекомендацій виробника.",
  },
  {
    icon: Car,
    title: "Кузовний ремонт",
    description:
      "Видалення вм'ятин, фарбування, полірування та захисне покриття кузова.",
  },
]

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-[#1c1c1c] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold uppercase tracking-wide text-[#f0f0f0] sm:text-4xl lg:text-5xl">
            Наші <span className="text-[#f0e060]">послуги</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-[#c0c0c0]">
            Ми пропонуємо повний спектр послуг з ремонту та обслуговування автомобілів. Якість та надійність — наш пріоритет.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col items-center rounded-lg border border-[#3c3c3c] bg-[#111111] p-8 text-center transition-all hover:border-[#f0e060]/50"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#f0e060]/30 bg-[#f0e060]/10 text-[#f0e060] transition-colors group-hover:bg-[#f0e060]/20">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold uppercase tracking-wide text-[#f0f0f0]">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#c0c0c0]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
