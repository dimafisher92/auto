import { Phone, Instagram, CalendarCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

const steps = [
  {
    icon: Phone,
    step: "01",
    title: "Зателефонуйте",
    description: "Зателефонуйте нам і розкажіть, що потрібно вашому авто.",
    action: {
      label: "+380 99 313 69 92",
      href: "tel:+380993136992",
    },
  },
  {
    icon: Instagram,
    step: "02",
    title: "Або напишіть в Instagram",
    description: "Напишіть нам у Direct — відповідаємо швидко.",
    action: {
      label: "@4gear.odesa",
      href: "https://www.instagram.com/4gear.odesa",
      external: true,
    },
  },
  {
    icon: CalendarCheck,
    step: "03",
    title: "Ми підберемо зручний час",
    description:
      "Узгодимо дату та час візиту, озвучимо орієнтовну вартість і підтвердимо запис.",
  },
]

export function HowToBook() {
  return (
    <section
      id="how-to-book"
      className="scroll-mt-20 bg-[#111111] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold uppercase tracking-wide text-[#f0f0f0] sm:text-4xl lg:text-5xl">
            Як <span className="text-[#f0e060]">записатись</span> на сервіс?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-[#c0c0c0]">
            Три прості кроки — і ваш автомобіль у надійних руках.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {steps.map((item) => (
            <div
              key={item.step}
              className="flex flex-col items-center rounded-lg border border-[#3c3c3c] bg-[#1c1c1c] p-8 text-center transition-all hover:border-[#f0e060]/50"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#f0e060]/30 bg-[#f0e060]/10 text-[#f0e060]">
                <item.icon className="h-6 w-6" />
              </div>
              <span className="mt-4 text-sm font-bold uppercase tracking-widest text-[#f0e060]">
                Крок {item.step}
              </span>
              <h3 className="mt-2 font-heading text-lg font-semibold uppercase tracking-wide text-[#f0f0f0]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#c0c0c0]">
                {item.description}
              </p>
              {item.action && (
                <Button
                  asChild
                  variant="outline"
                  className="mt-5 border-[#f0e060] text-[#f0e060] hover:bg-[#f0e060]/10"
                >
                  <a
                    href={item.action.href}
                    target={item.action.external ? "_blank" : undefined}
                    rel={
                      item.action.external
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {item.action.label}
                  </a>
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
