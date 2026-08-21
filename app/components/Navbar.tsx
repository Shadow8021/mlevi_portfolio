"use client"
import { useState } from "react"
import Contenaire from "./Contenaire"
import Link from "next/link"

export default function Navbar() {
  const navItems = ["Work", "Skills", "Services", "About", "Contact"];  
  const [menuOpen, setMenuOpen] = useState(false)
    
  return (
    <nav className="border-b sticky top-0 right-0 z-50 border-[#404060] bg-[#1a1a2e] text-[#f5f0e6] w-full h-18">
      <Contenaire className="flex items-center justify-between py-5">
         <a className="logo" href="#top" aria-label="Retour en haut">LM<span>.</span></a>
        <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          {navItems.map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</Link>
          ))}
        </div>
        <a className="nav-cta" href="#contact">Discutons <span>↗</span></a>
        <button className="menu-toggle" type="button" aria-label="Ouvrir le menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span /> <span />
        </button>
      </Contenaire>
    </nav>
  )
}
