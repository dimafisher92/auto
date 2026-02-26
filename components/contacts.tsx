import { MapPin, Clock, Phone, MessageCircle } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Адреса",
    lines: ["м. Одеса", "вул. Автосервісна, 1"],
  },
  {
    icon: Clock,
    title: "Графік роботи",
    lines: ["Пн - Сб: 9:00 - 19:00", "Нд: вихідний"],
  },
  {
    icon: Phone,
    title: "Телефон",
    lines: ["+380 XX XXX XX XX"],
    href: "tel:+380XXXXXXXXX",
  },
  {
    icon: MessageCircle,
    title: "Instagram",
    lines: ["@4gear.odesa"],
    href: "https://www.instagram.com/4gear.odesa",
  },
]

export function Contacts() {
  return (
    <section id="contacts" className="scroll-mt-20 bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold uppercase tracking-wide text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-primary">Контакти</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Зв&#39;яжіться з нами будь-яким зручним способом або завітайте до нашого автосервісу.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((item) => {
            const content = (
              <div className="flex flex-col items-center rounded-lg border border-border bg-card p-8 text-center transition-all hover:border-primary/50">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold uppercase tracking-wide text-foreground">
                  {item.title}
                </h3>
                {item.lines.map((line) => (
                  <p key={line} className="mt-1 text-sm text-muted-foreground">
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

        {/* Map embed placeholder */}
        <div className="mt-14 overflow-hidden rounded-lg border border-border">
          <iframe
            title="Розташування автосервісу 4GEAR на карті"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2747.6!2d30.7233!3d46.4825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDI4JzU3LjAiTiAzMMKwNDMnMjQuMCJF!5e0!3m2!1suk!2sua!4v1700000000000"
            width="100%"
            height="400"
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
