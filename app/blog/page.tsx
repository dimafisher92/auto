import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Calendar } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getAllPosts, formatDate } from "@/lib/blog"

export const metadata: Metadata = {
  title: "Блог — 4GEAR Автосервіс Одеса",
  description:
    "Корисні статті про догляд за автомобілем, детейлінг та автосервіс від майстрів 4GEAR в Одесі.",
  openGraph: {
    title: "Блог — 4GEAR Автосервіс Одеса",
    description:
      "Корисні статті про догляд за автомобілем, детейлінг та автосервіс від майстрів 4GEAR.",
    type: "website",
    locale: "uk_UA",
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#111111] pb-20 pt-24 lg:pb-28 lg:pt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <h1 className="text-3xl font-bold uppercase tracking-wide text-[#f0f0f0] sm:text-4xl lg:text-5xl">
              Наш <span className="text-[#f0e060]">блог</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-[#c0c0c0]">
              Корисні поради, огляди та новини зі світу автомобільного детейлінгу та сервісу.
            </p>
          </div>

          {posts.length === 0 ? (
            <p className="text-center text-[#c0c0c0]">
              Статей ще немає. Скоро буде щось цікаве!
            </p>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col overflow-hidden rounded-lg border border-[#3c3c3c] bg-[#1c1c1c] transition-all hover:border-[#f0e060]/50"
                >
                  {post.coverImage ? (
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="flex h-48 w-full items-center justify-center bg-[#3c3c3c]">
                      <span className="text-4xl font-bold uppercase tracking-widest text-[#f0e060]/20">
                        4GEAR
                      </span>
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-2 text-xs text-[#6b7b7b]">
                      <Calendar className="h-3.5 w-3.5" />
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                    </div>
                    <h2 className="mt-3 text-lg font-semibold leading-snug text-[#f0f0f0] transition-colors group-hover:text-[#f0e060]">
                      {post.title}
                    </h2>
                    <p className="mt-2 flex-1 line-clamp-3 text-sm leading-relaxed text-[#c0c0c0]">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 text-sm font-semibold text-[#f0e060] transition-opacity group-hover:opacity-80">
                      Читати далі →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
