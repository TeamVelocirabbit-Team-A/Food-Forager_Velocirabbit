export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Vite + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  // navItems: [
  //   {
  //     label: "Home",
  //     href: "/",
  //   },
  //   {
  //     label: "Docs",
  //     href: "/docs",
  //   },
  //   {
  //     label: "Pricing",
  //     href: "/pricing",
  //   },
  //   {
  //     label: "Blog",
  //     href: "/blog",
  //   },
  //   {
  //     label: "About",
  //     href: "/about",
  //   },
  // ],
  navMenuItems: [
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github:
      "https://github.com/TeamVelocirabbit-Team-A/Food-Forager_Velocirabbit",
    docs: "https://nextui-docs-v2.vercel.app",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
