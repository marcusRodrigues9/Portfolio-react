import "./styles.css";
import img from "../../assets/img.jpg";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot, FaEnvelope } from "react-icons/fa6";
import { useState } from "react";

export default function SobreMim() {
  const [copied, setCopied] = useState(false);
  const email = "marcus.rodriguescv@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <section className="section-sobre-mim" id="sobre">
      <div className="container">

        <div className="sec-img">
          <img src={img} alt="Foto de Marcus Rodrigues" />
        </div>

        <div className="sec-sobre">
          <h1 className="my-name">Marcus Rodrigues</h1>
          <h3 className="my-prof">Software Developer</h3>

          <h3 className="my-from">
            <FaLocationDot /> Minas Gerais, Brasil
          </h3>

          <p className="my-desc">
            Estudante e entusiasta de desenvolvimento de software, com interesse em
            aplicações web e APIs. Atualmente estudo tecnologias como
            <strong> Java, Spring Boot e React</strong>, buscando evoluir com projetos
            práticos e aprendizado contínuo.
          </p>

          <div className="icons">
            <a
              href="https://www.linkedin.com/in/marcus-vinicius-844820297/"
              className="icon-linkedin"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/marcusRodrigues9"
              className="icon-github"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://wa.me/5535997337238"
              className="icon-whatsapp"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>

            {/* EMAIL COPIÁVEL */}
            <button
              className="icon-email"
              onClick={handleCopyEmail}
              aria-label="Copiar email"
            >
              <FaEnvelope />
            </button>
          </div>

          {copied && <span className="copy-msg">Email copiado!</span>}

        </div>
      </div>
    </section>
  );
}
