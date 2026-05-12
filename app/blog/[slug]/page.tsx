import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { ArrowLeft, Calendar } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getPostBySlug, getAllPosts, formatDate } from "@/lib/blog"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return { title: "Статтю не знайдено — 4GEAR" }
  }

  return {
    title: `${post.title} — 4GEAR Блог`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      locale: "uk_UA",
      publishedTime: post.date,
      ...(post.coverImage && { images: [{ url: post.coverImage }] }),
    },
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) notFound()

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#111111] pb-20 pt-24 lg:pb-28 lg:pt-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm text-[#c0c0c0] transition-colors hover:text-[#f0e060]"
          >
            <ArrowLeft className="h-4 w-4" />
            Назад до блогу
          </Link>

          {post.coverImage && (
            <div className="relative mb-8 h-64 w-full overflow-hidden rounded-lg sm:h-80 lg:h-96">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <div className="mb-4 flex items-center gap-2 text-sm text-[#6b7b7b]">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>

          <h1 className="text-3xl font-bold leading-tight text-[#f0f0f0] sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-[#c0c0c0]">{post.excerpt}</p>

          <div className="my-8 border-t border-[#3c3c3c]" />

          <div className="prose-blog">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
          </div>

          <div className="mt-16 rounded-lg border border-[#3c3c3c] bg-[#1c1c1c] p-8 text-center">
            <h2 className="text-xl font-bold uppercase tracking-wide text-[#f0f0f0]">
              Потрібна консультація?
            </h2>
            <p className="mt-2 text-[#c0c0c0]">
              Зв'яжіться з нами — відповімо на всі запитання.
            </p>
            <a
              href="tel:+380993136992"
              className="mt-6 inline-block rounded bg-[#f0e060] px-8 py-3 text-sm font-semibold uppercase tracking-wider text-[#111111] transition-opacity hover:opacity-90"
            >
              Зателефонувати
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
