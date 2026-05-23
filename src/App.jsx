import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './index.css';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const lastScrollY = useRef(0);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d5h8bvm', 'template_kaxw90y', e.target, 'ZMeJ2XUlOOle2Bm8J')
      .then((result) => {
          setIsModalOpen(true);
          e.target.reset();
      }, (error) => {
          alert('Erreur lors de l\'envoi : ' + error.text);
      });
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <img src="/favicon-96x96.png" alt="Logo" className="header-logo" />
        <div className={`nav-links ${scrolled ? 'nav-links--hidden' : ''}`}>
          <a href="#home">Accueil</a>
          <a href="#about">À propos de moi</a>
          <a href="#work">Mes Projets</a>
          <a href="#contact" className="btn-contact">Contact</a>
        </div>
      </nav>

      <div className={`availability ${scrolled ? 'availability--floating' : ''}`}>
        <span className="dot"></span>
        <span>Disponible</span>
      </div>

      <main>
        <section id="home" className="hero">
          <h1 className="hero-title">
            <span className="hero-subtitle">MOTION<br />DESIGNER</span>
            <span className="hero-main-text">MONTEUR<br />VIDÉO <span className="ampersand">&</span></span>
          </h1>
          <p id="work" className="hero-sub">
            Monteur Vidéo & Motion Designer | After Effects, Premiere Pro & Blender
          </p>

          <div className="portfolio-grid">
            {/* Grid of 8 vertical video placeholders matching the screenshot */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="portfolio-item">
                <div className="portfolio-img" style={{ background: `linear-gradient(to bottom, #1a1a1a, #0a0a0a)` }}></div>
                <div className="play-icon">▶</div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="section">
          <div className="about-header">
            <h2 className="section-title">À PROPOS DE MOI</h2>
            <div className="about-photo-wrapper">
              <img src="/dhane.png" alt="Dhane" className="about-photo-img" />
            </div>
          </div>
          <div className="about-content">
              <p className="about-text">
                Bonjour ! Sur les réseaux sociaux, on m'appelle <strong className="about-name">Dhane</strong>. En tant que monteur vidéo et motion designer, je combine le montage dynamique et la 3D pour aider les créateurs à raconter des histoires captivantes.
              </p>

              <div className="experience">
                <span className="exp-num">01</span>
                <span className="exp-text">An d'expérience</span>
              </div>

              <p className="about-contact">
                <strong>Email :</strong> <span>sramadane2@gmail.com</span>
              </p>

              <div className="socials">
                <a href="https://x.com/dhane_visual" target="_blank" rel="noopener noreferrer" className="social-icon social-icon--x">𝕏</a>
                <a href="https://www.instagram.com/dhanevisuals/" target="_blank" rel="noopener noreferrer" className="social-icon social-icon--instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
                <a href="https://www.youtube.com/@DhaneVisuals" target="_blank" rel="noopener noreferrer" className="social-icon social-icon--youtube">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="center-logo">
            <img src="/favicon-96x96.png" alt="Logo" className="center-logo-favicon" />
          </div>
        </section>

        <section id="contact" className="section">
          <h2 className="section-title">TRAVAILLONS ENSEMBLE</h2>
          <p className="contact-desc">
            Créons quelque chose d'inoubliable, du concept au montage final. Grâce au motion design, aux transitions fluides et au storytelling créatif, je donne vie à votre vision.
          </p>

          <form className="form" id="contact-form" onSubmit={sendEmail}>
            <div className="form-group">
              <label>Nom de la chaîne</label>
              <input type="text" name="user_name" className="form-input" placeholder="Nom de votre chaîne" required />
            </div>
            
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="user_email" className="form-input" placeholder="sramadane2@gmail.com" required />
            </div>

            <div className="form-group">
              <label>WhatsApp</label>
              <input type="tel" name="user_whatsapp" className="form-input" placeholder="+33 6 00 00 00 00" required />
            </div>

            <div className="form-group">
              <label>Service souhaité ?</label>
              <select name="service" className="form-input" required>
                <option value="">Sélectionner...</option>
                <option value="short">Short ou Reel</option>
                <option value="long">Vidéo long format</option>
                <option value="motion">Motion Design</option>
              </select>
            </div>

            <div className="form-group">
              <label>Comment puis-je vous aider ?</label>
              <textarea name="message" className="form-input" placeholder="Bonjour, je vous contacte pour..." required></textarea>
            </div>

            <button type="submit" className="btn-submit">ENVOYER</button>
          </form>
        </section>
      </main>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <span className="footer-label">Email :</span>
            <span className="footer-value">sramadane2@gmail.com</span>
          </div>
          <div className="footer-section">
            <span className="footer-label">Réseaux :</span>
            <div className="socials">
              <a href="https://x.com/dhane_visual" target="_blank" rel="noopener noreferrer" className="social-icon social-icon--x" style={{fontSize: '1rem'}}>𝕏</a>
              <a href="https://www.instagram.com/dhanevisuals/" target="_blank" rel="noopener noreferrer" className="social-icon social-icon--instagram" style={{fontSize: '1rem'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/@DhaneVisuals" target="_blank" rel="noopener noreferrer" className="social-icon social-icon--youtube" style={{fontSize: '1rem'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© Copyright 2026. Tous droits réservés</span>
          <span>Créé par Dhane</span>
        </div>
      </footer>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-icon">✓</div>
            <h3>Message envoyé !</h3>
            <p>Merci pour votre message. Je vous répondrai dans les plus brefs délais.</p>
            <button className="btn-modal" onClick={() => setIsModalOpen(false)}>Fermer</button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;

