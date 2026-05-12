// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  branch: process.env.NEXT_PUBLIC_TINA_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "\u0411\u043B\u043E\u0433",
        path: "content/posts",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
            isTitle: true,
            required: true
          },
          {
            type: "datetime",
            name: "date",
            label: "\u0414\u0430\u0442\u0430 \u043F\u0443\u0431\u043B\u0456\u043A\u0430\u0446\u0456\u0457",
            required: true
          },
          {
            type: "string",
            name: "excerpt",
            label: "\u041A\u043E\u0440\u043E\u0442\u043A\u0438\u0439 \u043E\u043F\u0438\u0441",
            ui: { component: "textarea" },
            required: true
          },
          {
            type: "image",
            name: "coverImage",
            label: "\u041E\u0431\u043A\u043B\u0430\u0434\u0438\u043D\u043A\u0430"
          },
          {
            type: "string",
            name: "body",
            label: "\u0412\u043C\u0456\u0441\u0442 \u0441\u0442\u0430\u0442\u0442\u0456",
            isBody: true,
            ui: { component: "textarea" }
          }
        ],
        ui: {
          filename: {
            slugify: (values) => values?.title?.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "") ?? ""
          }
        }
      }
    ]
  }
});
export {
  config_default as default
};
