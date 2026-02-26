import { Instagram } from "lucide-react"

const footerNav = [
  { label: "Про нас", href: "#about" },
  { label: "Послуги", href: "#services" },
  { label: "Чому ми", href: "#why-us" },
  { label: "Відгуки", href: "#reviews" },
  { label: "Контакти", href: "#contacts" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
          {/* Logo & tagline */}
          <div className="flex flex-col items-center lg:items-start">
            <span className="font-heading text-2xl font-bold tracking-wider text-primary">
              4GEAR
            </span>
            <p className="mt-2 text-sm text-muted-foreground">
              Професійний автосервіс в Одесі
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6" aria-label="Footer navigation">
            {footerNav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
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
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="Instagram 4GEAR"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} 4GEAR. Всі права захищені.
          </p>
        </div>
      </div>
    </footer>
  )
}
