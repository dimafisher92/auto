import { MapPin, Clock, Phone, MessageCircle } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Адреса",
    lines: ["вул. Якова Бреуса, 75", "Одеса, 65000"],
    href: "https://maps.google.com/?q=Yakova+Breusa+St,+75,+Odesa,+Odesa+Oblast,+65000",
  },
  {
    icon: Clock,
    title: "Графік роботи",
    lines: ["Пн - Сб: 9:00 - 19:00", "Нд: вихідний"],
  },
  {
    icon: Phone,
    title: "Телефон",
    lines: ["+380 99 313 69 92"],
    href: "tel:+380993136992",
  },
  {
    icon: MessageCircle,
    title: "Instagram",
    lines: ["@4gear.odesa, Запис в дірект"],
    href: "https://www.instagram.com/4gear.odesa",
  },
]

export function Contacts() {
  return (
    <section id="contacts" className="scroll-mt-20 bg-[#1c1c1c] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold uppercase tracking-wide text-[#f0f0f0] sm:text-4xl lg:text-5xl">
            <span className="text-[#f0e060]">Контакти</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-[#c0c0c0]">
            Зв&#39;яжіться з нами будь-яким зручним способом або завітайте до нашого автосервісу.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((item) => {
            const content = (
              <div className="flex flex-col items-center rounded-lg border border-[#3c3c3c] bg-[#111111] p-6 text-center transition-all hover:border-[#f0e060]/50 sm:p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#f0e060]/30 bg-[#f0e060]/10 text-[#f0e060]">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold uppercase tracking-wide text-[#f0f0f0]">
                  {item.title}
                </h3>
                {item.lines.map((line) => (
                  <p key={line} className="mt-1 text-sm text-[#c0c0c0]">
                    {line}
                  </p>
                ))}
              </div>
            )

            if (item.href) {
              return (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {content}
                </a>
              )
            }

            return <div key={item.title}>{content}</div>
          })}
        </div>

        {/* Map embed */}
        <div className="mt-14 overflow-hidden rounded-lg border border-[#3c3c3c]">
          <iframe
            title="Розташування автосервісу 4GEAR на карті"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2749.0!2d30.7280!3d46.4480!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDI2JzUzLjAiTiAzMMKwNDMnNDEuMCJF!5e0!3m2!1suk!2sua!4v1700000000000!5m2!1suk!2sua&q=Yakova+Breusa+St,+75,+Odesa,+65000"
            width="100%"
            height="300"
            className="h-[250px] sm:h-[350px] lg:h-[400px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
