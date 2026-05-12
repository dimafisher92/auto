import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDirectory = path.join(process.cwd(), "content/posts")

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  coverImage?: string
  content: string
}

export interface BlogPostMeta {
  slug: string
  title: string
  date: string
  excerpt: string
  coverImage?: string
}

function postsDirectoryExists(): boolean {
  return fs.existsSync(postsDirectory)
}

export function getAllPosts(): BlogPostMeta[] {
  if (!postsDirectoryExists()) return []

  const fileNames = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".mdx"))

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "")
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data } = matter(fileContents)

    return {
      slug,
      title: data.title as string,
      date: data.date as string,
      excerpt: data.excerpt as string,
      coverImage: data.coverImage as string | undefined,
    }
  })

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostBySlug(slug: string): BlogPost | null {
  if (!postsDirectoryExists()) return null

  const fullPath = path.join(postsDirectory, `${slug}.mdx`)

  if (!fs.existsSync(fullPath)) return null

  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    excerpt: data.excerpt as string,
    coverImage: data.coverImage as string | undefined,
    content,
  }
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("uk-UA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}
