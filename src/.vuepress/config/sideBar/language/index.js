module.exports = [
  "learning",
  {
    title: "JavaScript",
    icon: "javascript",
    path: "js/",
    prefix: "js/",
    collapsable: false,
    children: [
      "intro/",
      "guide/",
      "types/",
      "operators/",
      "function/",
      "object/",
      "browser/",
      "es6/",
    ],
  },
  {
    title: "TypeScript",
    icon: "typescript",
    path: "typescript/",
    prefix: "typescript/",
    collapsable: false,
    children: ["intro/", "basics/", "advanced/"],
  },
  {
    title: "Python",
    icon: "python",
    path: "python/",
    prefix: "python/",
    collapsable: false,
    children: [
      "intro/",
      "guide/",
      "function/",
      "advance/",
      "functional-programming/",
      "module/",
      "oop/",
    ],
  },
  "python/",
  "json/",
  "yaml/",
  {
    title: "Markdown",
    icon: "markdown",
    path: "markdown/",
    prefix: "markdown/",
    collapsable: false,
    children: ["intro", "block", "inline", "extend", "emoji/"],
  },
  "linter/",
];
