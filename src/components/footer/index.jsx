import "./styles.css";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer" id="contato">
      <div className="footer-container">

        <div className="footer-info">
          <h3>Marcus Rodrigues</h3>
          <p>
            <FaLocationDot /> Minas Gerais, Brasil
          </p>
        </div>

        <div className="footer-icons">
          <a
            href="https://www.linkedin.com/in/marcus-vinicius-844820297/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/marcusRodrigues9"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://wa.me/5535997337238" 
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>

      </div>

      <div className="footer-copy">
        © {new Date().getFullYear()} Marcus Rodrigues. Todos os direitos reservados.
      </div>
    </footer>
  );
}
