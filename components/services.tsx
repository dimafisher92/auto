import {
  Sparkles,
  CircleDot,
  PaintBucket,
  ShieldCheck,
  Shield,
  Eye,
  Gauge,
  Wrench,
  Cog,
  Zap,
  Layers,
  Package,
  Settings,
  type LucideIcon,
} from "lucide-react"

interface Service {
  icon: LucideIcon
  title: string
  description: string
  popular?: boolean
}

const detailingServices: Service[] = [
  {
    icon: Sparkles,
    title: "Хімчистка",
    description:
      "Професійна хімчистка салону — глибоке очищення оббивки, пластику та всіх поверхонь.",
    popular: true,
  },
  {
    icon: CircleDot,
    title: "Полірування",
    description:
      "Відновлювальне та захисне полірування кузова для ідеального блиску.",
    popular: true,
  },
  {
    icon: PaintBucket,
    title: "Антихром",
    description:
      "Затемнення хромованих елементів для стильного та сучасного вигляду.",
    popular: true,
  },
  {
    icon: ShieldCheck,
    title: "Керамічне покриття",
    description:
      "Нанесення керамічного покриття для довготривалого захисту лакофарбового покриття.",
  },
  {
    icon: Shield,
    title: "Бронеплівка",
    description:
      "Захист кузова прозорою поліуретановою плівкою від сколів та подряпин.",
  },
  {
    icon: Eye,
    title: "Захист скла та фар",
    description:
      "Нанесення захисних покриттів на скло та оптику для кращої видимості.",
  },
]

const autoServices: Service[] = [
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
    icon: Layers,
    title: "Заміна скла",
    description:
      "Заміна лобового та бокового скла з використанням якісних матеріалів.",
  },
  {
    icon: Package,
    title: "Запчастини",
    description:
      "Підбір та постачання оригінальних і якісних аналогових запчастин.",
  },
  {
    icon: Settings,
    title: "Технічні роботи",
    description:
      "Планове ТО, заміна масла, фільтрів та інші регламентні роботи.",
  },
]

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group relative flex flex-col items-center rounded-lg border border-[#3c3c3c] bg-[#111111] p-8 text-center transition-all hover:border-[#f0e060]/50">
      {service.popular && (
        <span className="absolute top-3 right-3 rounded-full bg-[#f0e060] px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-[#111111]">
          Популярне
        </span>
      )}
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
  )
}

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
            Наш основний напрям — автомобільний детейлінг. Також через перевірених підрядників закриваємо будь-які додаткові потреби вашого авто.
          </p>
        </div>

        {/* Detailing group */}
        <div className="mt-14">
          <h3 className="mb-8 text-center font-heading text-xl font-bold uppercase tracking-wide text-[#f0e060] sm:text-2xl">
            Детейлінг
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {detailingServices.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>

        {/* Auto service group */}
        <div className="mt-16">
          <h3 className="mb-8 text-center font-heading text-xl font-bold uppercase tracking-wide text-[#c0c0c0] sm:text-2xl">
            Автосервіс
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {autoServices.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
