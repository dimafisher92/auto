import { Instagram } from "lucide-react"
import Image from "next/image"

const footerNav = [
  { label: "Про нас", href: "#about" },
  { label: "Послуги", href: "#services" },
  { label: "Чому ми", href: "#why-us" },
  { label: "Відгуки", href: "#reviews" },
  { label: "Контакти", href: "#contacts" },
]

export function Footer() {
  return (
    <footer className="border-t border-[#3c3c3c] bg-[#111111] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
          {/* Logo & tagline */}
          <div className="flex flex-col items-center lg:items-start">
            <Image
              src="/images/logo-white.png"
              alt="4GEAR logo"
              width={140}
              height={36}
              className="h-8 w-auto"
            />
            <p className="mt-3 text-sm text-[#6b7b7b]">
              Професійний автосервіс в Одесі
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6" aria-label="Footer navigation">
            {footerNav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm uppercase tracking-wider text-[#c0c0c0] transition-colors hover:text-[#f0e060]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/4gear.odesa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#3c3c3c] text-[#c0c0c0] transition-colors hover:border-[#f0e060] hover:text-[#f0e060]"
              aria-label="Instagram 4GEAR"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-[#3c3c3c] pt-8 text-center">
          <p className="text-sm text-[#6b7b7b]">
            &copy; {new Date().getFullYear()} 4GEAR. Всі права захищені.
          </p>
        </div>
      </div>
    </footer>
  )
}
