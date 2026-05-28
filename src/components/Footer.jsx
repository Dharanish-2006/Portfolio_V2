import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'

export default function Footer() {
  return (
    <footer className="footer">
      <span>
        Designed &amp; built by{' '}
        <a href="https://github.com/Dharanish-2006" target="_blank" rel="noreferrer">
          Dharanish
        </a>{' '}
        · {new Date().getFullYear()}
      </span>

      <div className="footer-right">
        <a href="https://github.com/Dharanish-2006" target="_blank" rel="noreferrer" aria-label="GitHub">
          <AiFillGithub size={16} />
        </a>
        <a href="https://www.linkedin.com/in/dharanishwar-s/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <AiFillLinkedin size={16} />
        </a>
        <a href="https://www.instagram.com/x3__dharxnish__/" target="_blank" rel="noreferrer" aria-label="Instagram">
          <AiFillInstagram size={16} />
        </a>
      </div>
    </footer>
  )
}
