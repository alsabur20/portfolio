import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/paperfolio/Navbar";
import { Hero } from "@/components/paperfolio/Hero";
import { Experience } from "@/components/paperfolio/Experience";
import { Projects } from "@/components/paperfolio/Projects";
import { Skills } from "@/components/paperfolio/Skills";
import { Contact, Footer } from "@/components/paperfolio/Contact";
import { BackToTop } from "@/components/paperfolio/BackToTop";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abdul Sabur — Full-Stack Software Engineer & CS Graduate" },
      {
        name: "description",
        content:
          "Portfolio of Abdul Sabur, a fresh Computer Science graduate and full-stack software engineer building clean, functional web apps with React, Next.js, ASP.NET Core, and Python.",
      },
      {
        name: "keywords",
        content:
          "Abdul Sabur, software engineer, full-stack developer, web developer, React, Next.js, ASP.NET Core, Python, TypeScript, Computer Science graduate, portfolio",
      },
      { name: "author", content: "Abdul Sabur" },
      { name: "robots", content: "index, follow" },

      {
        property: "og:title",
        content: "Abdul Sabur — Full-Stack Software Engineer",
      },
      {
        property: "og:description",
        content:
          "An animated paper-inspired portfolio of projects, experience, and experiments by Abdul Sabur.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Abdul Sabur — Paperfolio" },
      { property: "og:locale", content: "en_US" },

      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Abdul Sabur — Full-Stack Software Engineer",
      },
      {
        name: "twitter:description",
        content:
          "Portfolio of Abdul Sabur — fresh CS graduate shipping web apps across the stack.",
      },
      { name: "twitter:creator", content: "@alsabur20" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div id="top" className="min-h-screen bg-paper text-ink">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}
