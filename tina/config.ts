import { defineConfig } from "tinacms"

export default defineConfig({
  branch: process.env.NEXT_PUBLIC_TINA_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Блог",
        path: "content/posts",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Заголовок",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Дата публікації",
            required: true,
          },
          {
            type: "string",
            name: "excerpt",
            label: "Короткий опис",
            ui: { component: "textarea" },
            required: true,
          },
          {
            type: "image",
            name: "coverImage",
            label: "Обкладинка",
          },
          {
            type: "string",
            name: "body",
            label: "Вміст статті",
            isBody: true,
            ui: { component: "textarea" },
          },
        ],
        ui: {
          filename: {
            slugify: (values) =>
              values?.title
                ?.toLowerCase()
                .replace(/ /g, "-")
                .replace(/[^\w-]+/g, "") ?? "",
          },
        },
      },
    ],
  },
})
