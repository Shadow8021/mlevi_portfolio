"use client";

import Image from "next/image";
import { useState } from "react";

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

const navItems = ["Work", "Skills", "Services", "About", "Contact"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <nav className="site-nav" aria-label="Navigation principale">
        <a className="logo" href="#top" aria-label="Retour en haut">LM<span>.</span></a>
        <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>
          ))}
        </div>
        <a className="nav-cta" href="#contact">Discutons <span>↗</span></a>
        <button className="menu-toggle" type="button" aria-label="Ouvrir le menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span /> <span />
        </button>
      </nav>

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
            <article className="project-card" key={project.number}>
              <span className="project-number">{project.number}</span><div className={`project-art ${project.color}`}><span>{project.title.slice(0, 1)}</span></div>
              <div className="project-content"><p className="project-type">{project.type}</p><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
              <a className="round-arrow" href="#contact" aria-label={`En savoir plus sur ${project.title}`}>↗</a>
            </article>
          ))}
        </div>
      </section>

      <section className="skills section-wrap" id="skills">
        <div className="section-heading"><p className="section-label">03 / Compétences</p><span>Les outils que j&apos;utilise au quotidien</span></div>
        <div className="skills-layout"><div className="skills-intro"><h2>Une stack solide,<br /><em>sans dogme.</em></h2><p>Je choisis la technologie qui sert le mieux le produit, la qualité d&apos;expérience et l&apos;équipe qui va le faire vivre.</p></div><div className="skill-groups"><div className="skill-group"><span className="skill-index">01</span><div><h3>Frontend</h3><p>React · Next.js · TypeScript · Tailwind CSS · Framer Motion</p></div></div><div className="skill-group"><span className="skill-index">02</span><div><h3>Backend</h3><p>Node.js · NestJS · PostgreSQL · REST · GraphQL</p></div></div><div className="skill-group"><span className="skill-index">03</span><div><h3>Mobile &amp; outils</h3><p>React Native · Expo · Git · Docker · AWS · Figma</p></div></div></div></div>
      </section>

      <section className="services section-wrap" id="services">
        <div className="section-heading"><p className="section-label">04 / Ce que je fais</p><span>Une approche, plusieurs terrains de jeu</span></div>
        <div className="service-grid"><div><span className="service-index">01</span><h3>Web apps</h3><p>Des produits web robustes, de l&apos;API à l&apos;interface, pensés pour durer et grandir.</p></div><div><span className="service-index">02</span><h3>Mobile</h3><p>Des applications iOS et Android fluides qui trouvent naturellement leur place dans la vie des gens.</p></div><div><span className="service-index">03</span><h3>Direction technique</h3><p>Architecture, choix de stack et accompagnement pour avancer avec moins de friction.</p></div></div>
      </section>

      <section className="contact section-wrap" id="contact"><p className="section-label">05 / Contact</p><div className="contact-main"><h2>Une idée en tête ?<br /><em>Faisons-la exister.</em></h2><a className="contact-email" href="mailto:hello@lamine.dev">hello@lamine.dev <span>↗</span></a></div><div className="contact-footer"><span>© 2025 Lamine M.</span><span>Made with care & curiosity</span><div className="socials"><a href="https://github.com" aria-label="GitHub">GH</a><a href="https://linkedin.com" aria-label="LinkedIn">IN</a></div></div></section>
    </main>
  );
}
