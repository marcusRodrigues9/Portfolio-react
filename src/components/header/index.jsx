import "./styles.css";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <nav className={`nav ${open ? "open" : ""}`}>
        <a href="#sobre" onClick={() => setOpen(false)}>Sobre</a>
        <a href="#stacks" onClick={() => setOpen(false)}>Stacks</a>
        <a href="#experiencias" onClick={() => setOpen(false)}>Experiências</a>
        <a href="#projetos" onClick={() => setOpen(false)}>Projetos</a>
        <a href="#contato" onClick={() => setOpen(false)}>Contato</a>
      </nav>

      <button className="menu-btn" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  );
}
