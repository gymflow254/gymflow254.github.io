import { resolve } from "path";
export default defineNuxtConfig({
  alias: {
    "@": resolve(__dirname, "/"),
  },

  app: {
    head: {
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      title: "Martex - Software, App, SaaS & Startup NuxtJS Template",
      script: [],
    },
  },

  css: [
    "~/assets/css/vendors/bootstrap.min.css",
    "~/assets/css/vendors/flaticon.css",
    "~/assets/css/vendors/menu.css",
    "~/assets/css/vendors/fade-down.css",
    "~/assets/css/vendors/magnific-popup.css",
    "~/assets/css/vendors/animate.css",
    "~/assets/css/main.scss",
    "~/assets/css/responsive.scss",
    "~/assets/css/color-scheme/blue.scss",
    "~/assets/css/color-scheme/crocus.scss",
    "~/assets/css/color-scheme/green.scss",
    "~/assets/css/color-scheme/magenta.scss",
    "~/assets/css/color-scheme/pink.scss",
    "~/assets/css/color-scheme/skyblue.scss",
    "~/assets/css/color-scheme/violet.scss",
  ],

  app: {
    head: {
      meta: [
        {
          name: "GymFlow254",
          content:
            "Revolutionizing gym management with streamlined tools and insights for growth.",
        },
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "keywords",
          content:
            "gym management software, gym tools, fitness business growth, gym analytics, member management, workout scheduling, trainer tools, gym insights, gymFlow254 features, gym business solutions, gyms kenya, kenya gyms",
        },
        {
          name: "description",
          content:
            "GymFlow254 offers a cutting-edge gym management system to simplify operations, engage members, and boost revenue.",
        },
        { name: "robots", content: "index, follow" },
        { name: "x-robots", content: "index, follow" },
        {
          property: "og:title",
          content:
            "GymFlow254 - Streamline Your Gym Management and Drive Success",
        },
        {
          property: "og:description",
          content:
            "Discover GymFlow254: The all-in-one solution for gym owners to optimize operations, retain members, and achieve growth.",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://www.gymflow254.com" },
        {
          property: "og:image",
          content: "https://www.gymflow254.com/gymflow254-banner.jpg",
        },
        { property: "og:site_name", content: "GymFlow254" },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content:
            "GymFlow254 - Streamline Your Gym Management and Drive Success",
        },
        {
          name: "twitter:description",
          content:
            "Transform your gym management experience with GymFlow254. Simplify operations, engage members, and grow your fitness business.",
        },
        {
          name: "twitter:image",
          content: "https://www.gymflow254.com/twitter-banner.jpg",
        },
      ],
      title:
        "GymFlow254 - Revolutionizing Gym Management for Growth and Success",
      script: [],
    },
  },

  site: {
    name: "GymFlow254",
    description: "Innovative gym management software for fitness businesses in Kenya",
    url: "https://gymflow254.com",
    language: "en",
  },

  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Rubik: {
            wght: [300, 400, 500, 600, 700],
          },
          "Plus+Jakarta+Sans": {
            wght: [400, 500, 600, 700],
          },
          Inter: {
            wght: [400, 500, 600, 700, 800],
          },
          download: true,
          inject: true,
        },
      },
    ],
    "nuxt-swiper",
    "nuxt-countdown"
  ],

  compatibilityDate: "2024-12-19",
});
