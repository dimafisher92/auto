import { Instagram, MapPin, Phone, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const footerNav = [
  { label: "Про нас", href: "#about" },
  { label: "Послуги", href: "#services" },
  { label: "Чому ми", href: "#why-us" },
  { label: "Відгуки", href: "#reviews" },
  { label: "Контакти", href: "#contacts" },
  { label: "Блог", href: "/blog" },
]

export function Footer() {
  return (
    <footer className="border-t border-[#3c3c3c] bg-[#0a0a0a] py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo & tagline */}
          <div className="flex flex-col sm:col-span-2 lg:col-span-1">
            <Image
              src="/images/logo-white.png"
              alt="4GEAR logo"
              width={140}
              height={36}
              className="h-8 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#6b7b7b]">
              Професійний автосервіс повного циклу в Одесі. Якість, надійність, довіра.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-[#f0f0f0]">
              Навігація
            </h3>
            <nav className="mt-4 flex flex-col gap-3" aria-label="Footer navigation">
              {footerNav.map((link) =>
                link.href.startsWith("/") ? (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-[#c0c0c0] transition-colors hover:text-[#f0e060]"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm text-[#c0c0c0] transition-colors hover:text-[#f0e060]"
                  >
                    {link.label}
                  </a>
                )
              )}
            </nav>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-[#f0f0f0]">
              Контакти
            </h3>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href="tel:+380993136992"
                className="flex items-start gap-2 text-sm text-[#c0c0c0] transition-colors hover:text-[#f0e060]"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                +380 99 313 69 92
              </a>
              <a
                href="https://maps.google.com/?q=Yakova+Breusa+St,+75,+Odesa,+65000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-sm text-[#c0c0c0] transition-colors hover:text-[#f0e060]"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                вул. Якова Бреуса, 75, Одеса, 65000
              </a>
              <span className="flex items-start gap-2 text-sm text-[#c0c0c0]">
                <Clock className="mt-0.5 h-4 w-4 shrink-0" />
                Щодня: 10:00 — 19:00
              </span>
            </div>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-[#f0f0f0]">
              Соцмережі
            </h3>
            <div className="mt-4">
              <a
                href="https://www.instagram.com/4gear.odesa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#c0c0c0] transition-colors hover:text-[#f0e060]"
              >
                <Instagram className="h-5 w-5" />
                @4gear.odesa
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[#3c3c3c] pt-8 text-center">
          <p className="text-sm text-[#6b7b7b]">
            &copy; {new Date().getFullYear()} 4GEAR. Всі права захищені.
          </p>
        </div>
      </div>
    </footer>
  )
}
