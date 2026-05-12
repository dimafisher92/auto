"use client"

import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const navLinks = [
  { href: "/#about", label: "Про нас" },
  { href: "/#services", label: "Послуги" },
  { href: "/#why-us", label: "Чому ми" },
  { href: "/#reviews", label: "Відгуки" },
  { href: "/#contacts", label: "Контакти" },
  { href: "/blog", label: "Блог" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-[#111111]/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-yellow.png"
              alt="4GEAR logo"
              width={140}
              height={36}
              className="h-8 w-auto lg:h-10"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium uppercase tracking-wider text-[#c0c0c0] transition-colors hover:text-[#f0e060]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden items-center gap-4 lg:flex">
            <a href="tel:+380993136992" className="flex items-center gap-2 text-sm text-[#c0c0c0] transition-colors hover:text-[#f0e060]">
              <Phone className="h-4 w-4" />
              <span>+380 99 313 69 92</span>
            </a>
            <Button asChild className="bg-[#f0e060] font-semibold uppercase tracking-wider text-[#111111] hover:bg-[#f0e060]/90">
              <a href="tel:+380993136992">Зателефонувати</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="text-[#f0f0f0] lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Закрити меню" : "Відкрити меню"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="border-t border-border bg-[#111111] lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium uppercase tracking-wider text-[#c0c0c0] transition-colors hover:text-[#f0e060]"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+380993136992"
                className="flex items-center gap-2 text-base font-medium text-[#c0c0c0] transition-colors hover:text-[#f0e060]"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="h-4 w-4" />
                +380 99 313 69 92
              </a>
              <Button asChild className="mt-2 w-full bg-[#f0e060] font-semibold uppercase tracking-wider text-[#111111] hover:bg-[#f0e060]/90">
                <a href="tel:+380993136992" onClick={() => setIsOpen(false)}>Зателефонувати</a>
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
