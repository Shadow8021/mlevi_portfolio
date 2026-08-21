"use client";
import Image from "next/image";
import Timeline from "./components/Timeline";
import { ContactCard } from "./components/conatct/contact-card";
import Services from "./components/services";


const projects = [
  {
    number: "01",
    title: "Kora Market",
    type: "E-commerce · Web app",
    description: "Une expérience d'achat rapide pour les créateurs africains, pensée pour le mobile d'abord.",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    color: "coral",
  },
  {
    number: "02",
    title: "Fintrack",
    type: "Fintech · Mobile app",
    description: "Le tableau de bord qui rend les finances personnelles enfin lisibles et actionnables.",
    tags: ["React Native", "Node.js", "AWS"],
    color: "lime",
  },
  {
    number: "03",
    title: "Studio Noma",
    type: "Creative studio · Website",
    description: "Un site éditorial vivant pour une direction artistique qui ne tient pas dans une grille.",
    tags: ["TypeScript", "GSAP", "Sanity"],
    color: "lavender",
  },
];

export default function Home() {
  

  return (
    <main>
      <section className="hero section-wrap" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Disponible pour de nouveaux projets</p>
          <h1>Je construis des produits <em>digitaux</em> qui comptent.</h1>
          <p className="hero-intro">Développeur full-stack spécialisé dans les expériences web et mobiles. Je transforme les idées ambitieuses en outils simples, rapides et mémorables.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">Voir mes projets <span>↓</span></a>
            <a className="text-link" href="#contact">Parlons de votre idée <span>↗</span></a>
          </div>
        </div>
        <div className="hero-aside">
          <div className="portrait-frame"><Image src="/image.jpeg" alt="Portrait de Lamine, développeur full-stack" fill priority sizes="(max-width: 720px) 80vw, 34vw" /></div>
          <div className="portrait-note"><span>Based in</span><strong>Paris / Dakar</strong></div>
        </div>
        <div className="scroll-cue">Scroll to explore <span>↓</span></div>
      </section>

      <section className="intro-band" id="about">
        <div className="section-wrap intro-grid">
          <p className="section-label">01 / À propos</p>
          <div><h2>Du premier croquis à la mise en ligne.</h2><p className="large-copy">Je m&apos;appelle Lamine. J&apos;aime les problèmes complexes, les interfaces sans bruit et les équipes qui veulent faire les choses avec intention.</p></div>
        </div>
      </section>

      <section className="work section-wrap" id="work">
        <div className="section-heading"><p className="section-label">02 / Projets sélectionnés</p><span>Une sélection récente — 2023 / 2025</span></div>
        <div className="project-grid">
          {projects.map((project) => (
            <div key={project.number} className="card shadow-sm">
              <span className="project-number">{project.number}</span>
              <figure className={`project-art ${project.color}`}>
                <span>{project.title.slice(0, 1)}</span>
              </figure>
              <div className="card-body">
                <div className="project-content">
                    <p className="project-type">{project.type}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tags">{project.tags.map((tag) =>( 
                    <span key={tag}>{tag}</span>))}
                    </div>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="skills section-wrap" id="skills">
        <div className="section-heading"><p className="section-label">03 / Compétences</p><span>Les outils que j&apos;utilise au quotidien</span></div>
        <div className="skills-layout"><div className="skills-intro"><h2>Une stack solide,<br /><em>sans dogme.</em></h2><p>Je choisis la technologie qui sert le mieux le produit, la qualité d&apos;expérience et l&apos;équipe qui va le faire vivre.</p></div><div className="skill-groups"><div className="skill-group"><span className="skill-index">01</span><div><h3>Frontend</h3><p>React · Next.js · TypeScript · Tailwind CSS · Framer Motion</p></div></div><div className="skill-group"><span className="skill-index">02</span><div><h3>Backend</h3><p>Node.js · NestJS · PostgreSQL · REST · GraphQL</p></div></div><div className="skill-group"><span className="skill-index">03</span><div><h3>Mobile &amp; outils</h3><p>React Native · Expo · Git · Docker · AWS · Figma</p></div></div></div></div>
      </section>

      
      <section id="services">
        <Services/>
      </section>
      <section className="contact section-wrap" id="contact">
        <p className="section-label">05 / Contact</p>
        <ContactCard/>
      </section>
      
      
      
      
      
      
      
      <div className="min-h-screen w-full overflow-auto bg-papyrus" style={{ backgroundColor: "#1a1a2e" }}>
      <header className="relative px-4 py-8 text-center">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute left-1/4 top-0 h-32 w-32 rounded-full opacity-10"
            style={{
              background:
                "radial-gradient(circle, #d4af37 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute right-1/4 top-10 h-24 w-24 rounded-full opacity-10"
            style={{
              background:
                "radial-gradient(circle, #d4af37 0%, transparent 70%)",
            }}
          />
        </div>

        <div
          className="relative animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="mb-4 flex justify-center">
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              className="timeline-emblem"
              aria-hidden="true"
            >
              <circle
                cx="30"
                cy="30"
                r="25"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M30 10 L30 50 M10 30 L50 30"
                stroke="currentColor"
                strokeWidth="1.5"
                opacity="0.5"
              />
              <circle
                cx="30"
                cy="30"
                r="8"
                fill="currentColor"
                opacity="0.3"
              />
              <circle cx="30" cy="30" r="3" fill="currentColor" />
            </svg>
          </div>

          <h1 className="mb-2 font-cinzel text-3xl font-bold tracking-wider text-[#d4af37] md:text-4xl">
            Parcours full-stack
          </h1>

          <p className="font-crimson text-lg italic text-[#c9a959]">
            2014 — aujourd&apos;hui · 12 ans d&apos;expérience
          </p>
        </div>
      </header>

      <Timeline />
    </div>
    </main>
  );
}
