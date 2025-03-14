import { FaGithub } from "react-icons/fa"
import { PiLinkSimpleBold } from "react-icons/pi"

export const PROJECTS = [
  {
    title: "Buscando Personas",
    description:
      "Neovim is a hyper-extensible text editor based on Vim, and it is a fast editor compared to its counterparts like vscode, but it has a steep learning curve especially in terms of how to configure it, which I have made a bit easier for new developers who want to use neovim by creating and sharing my own configuration.",
    image: "/neovim.jpg",
    tags: [
      "+130 Stars",
      "30 Forks",
      "Lua",
      "Vimscript",
      "lazy.nvim",
      "packer.nvim",
    ],
    links: [
      {
        name: "Lazy",
        url: "https://github.com/slydragonn/nvim-lazy",
        icon: FaGithub,
      },
      {
        name: "Packer",
        url: "https://github.com/slydragonn/dotfiles",
        icon: FaGithub,
      },
    ],
  },
  {
    title: "Markdown Web Editor",
    description: "A Simple and Straightforward Markdown Web Editor",
    image: "/markwriter.jpg",
    tags: ["React", "Next.js", "Codemirror", "ChakraUI"],
    links: [
      {
        name: "Preview",
        url: "https://markwriter.vercel.app/",
        icon: PiLinkSimpleBold,
      },
      {
        name: "Github",
        url: "https://github.com/slydragonn/markwriter",
        icon: FaGithub,
      },
    ],
  },
  {
    title: "Landing Page",
    description: "Landing page for entrepreneurship competition",
    image: "/blueriver.jpg",
    tags: ["JavaScript", "Next.js"],
    links: [
      {
        name: "Preview",
        url: "https://blue-river.vercel.app/",
        icon: PiLinkSimpleBold,
      },
    ],
  },
  {
    title: "My Portfolio templates",
    description: "Free to use templates for the Astro Themes repository.",
    image: "/portfolios.png",
    tags: ["Astro", "TypeScript", "React", "Tailwind CSS"],
    links: [
      {
        name: "minimalist-dragon",
        url: "https://astro.build/themes/details/minimalist-dragon/",
        icon: PiLinkSimpleBold,
      },
      {
        name: "alogocode",
        url: "https://astro.build/themes/details/alogocode/",
        icon: PiLinkSimpleBold,
      },
    ],
  },
]
