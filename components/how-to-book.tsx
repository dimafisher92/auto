import { Phone, Instagram, CalendarCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

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
            Два прості кроки — і ваш автомобіль у надійних руках.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {/* Крок 01 */}
          <div className="flex flex-col items-center rounded-lg border border-[#3c3c3c] bg-[#1c1c1c] p-8 text-center transition-all hover:border-[#f0e060]/50">
            <div className="flex items-center gap-3 text-[#f0e060]">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#f0e060]/30 bg-[#f0e060]/10">
                <Phone className="h-6 w-6" />
              </div>
              <span className="text-xl text-[#c0c0c0]">/</span>
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#f0e060]/30 bg-[#f0e060]/10">
                <Instagram className="h-6 w-6" />
              </div>
            </div>
            <span className="mt-4 text-sm font-bold uppercase tracking-widest text-[#f0e060]">
              Крок 01
            </span>
            <h3 className="mt-2 font-heading text-lg font-semibold uppercase tracking-wide text-[#f0f0f0]">
              Зв&apos;яжіться з нами
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#c0c0c0]">
              Зателефонуйте або напишіть в Instagram — розкажіть, що потрібно вашому авто.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <Button
                asChild
                variant="outline"
                className="border-[#f0e060] text-[#f0e060] hover:bg-[#f0e060]/10"
              >
                <a href="tel:+380993136992">+380 99 313 69 92</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-[#f0e060] text-[#f0e060] hover:bg-[#f0e060]/10"
              >
                <a
                  href="https://www.instagram.com/4gear.odesa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @4gear.odesa
                </a>
              </Button>
            </div>
          </div>

          {/* Крок 02 */}
          <div className="flex flex-col items-center rounded-lg border border-[#3c3c3c] bg-[#1c1c1c] p-8 text-center transition-all hover:border-[#f0e060]/50">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#f0e060]/30 bg-[#f0e060]/10 text-[#f0e060]">
              <CalendarCheck className="h-6 w-6" />
            </div>
            <span className="mt-4 text-sm font-bold uppercase tracking-widest text-[#f0e060]">
              Крок 02
            </span>
            <h3 className="mt-2 font-heading text-lg font-semibold uppercase tracking-wide text-[#f0f0f0]">
              Ми підберемо зручний час
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#c0c0c0]">
              Узгодимо дату та час візиту, озвучимо орієнтовну вартість і підтвердимо запис.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
