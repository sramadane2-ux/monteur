import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './index.css';

const VideoCard = ({ videoId, isEmpty, isVertical }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="portfolio-item" style={{ paddingBottom: isVertical ? '177.77%' : '56.25%' }}>
      {isPlaying && !isEmpty ? (
        <iframe
          className="portfolio-video"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : isEmpty ? (
        <div className="video-overlay empty-card" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '2px dashed rgba(220, 0, 212, 0.3)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <span style={{ fontSize: '3rem', color: 'rgba(220, 0, 212, 0.5)' }}>+</span>
            <p style={{ marginTop: '1rem', color: 'rgba(255, 255, 255, 0.5)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Bientôt</p>
          </div>
        </div>
      ) : (
        <div 
          className="video-overlay" 
          onClick={() => setIsPlaying(true)}
          style={{
            backgroundImage: `url(https://img.youtube.com/vi/${videoId}/maxresdefault.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="play-overlay-gradient"></div>
          <div className="play-icon">▶</div>
        </div>
      )}
    </div>
  );
};

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const lastScrollY = useRef(0);

  // Remplacez ces faux IDs par les vrais IDs de vos vidéos YouTube une fois uploadées.
  // L'ID est la partie après "?v=" dans le lien YouTube.
  const youtubeVideos = [
    'uLsqfws34so', // Vidéo 1 (Dhane)
    'I3B6fQTqYv4', // Vidéo 2
    'ey__4skWICQ', // Vidéo 3 (À côté de la 2ème)
    'm_0-IPOmoHA', // Vidéo 4
    'HMXQKCbQeBY', // Vidéo 5 (Nouvelle)
    'VkkurZIOrdc', // Vidéo 6 (Remplacée)
    'wO4oPYzIKbU', // Vidéo 7
    'HYOL008DFK8', // Vidéo 8
    'ts_shREwRbI'  // Vidéo 9 (Remplacée)
  ];

  // IDs YouTube pour la section Reels (format horizontal 16:9 comme demandé)
  const reelVideos = [
    'VNT6x-EFq30', // Reel 1
    'VSJVIuNXolw', // Reel 2
    '-2Ru9GUt06Q', // Reel 3
    'TjHUSfycZ7w', // Reel 4
    'h3lFLkqYEcg', // Reel 5
    null           // Vidéo 6 (Carte vide)
  ];

  // IDs YouTube pour la section des vrais Reels (format vertical 9:16)
  const trueReels = [
    null, // Vrai Reel 1
    null, // Vrai Reel 2
    null, // Vrai Reel 3
    null  // Vrai Reel 4
  ];

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
          <div className="hero-header" style={{ position: 'relative', paddingBottom: '2rem' }}>
            <div className="floating-icons">
              <div className="floating-icon icon-vscode">
                <svg viewBox="0 0 256 256" width="100%" height="100%">
                  <defs>
                    <filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="-0.16" y="0.66" width="256.16" height="254.68">
                      <feColorMatrix type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"/>
                    </filter>
                  </defs>
                  <mask maskUnits="userSpaceOnUse" x="-0.16" y="0.66" width="256.16" height="254.68" id="mask0_1_">
                    <path fillRule="evenodd" clipRule="evenodd" fill="#FFFFFF" filter="url(#Adobe_OpacityMaskFilter)" d="M181.53,254.25c4.03,1.57,8.63,1.47,12.7-0.49l52.71-25.36c5.54-2.66,9.06-8.27,9.06-14.42V42.02 c0-6.15-3.52-11.75-9.06-14.42L194.23,2.24c-5.34-2.57-11.59-1.94-16.28,1.47c-0.67,0.49-1.31,1.03-1.91,1.63L75.15,97.39 L31.2,64.02c-4.09-3.11-9.81-2.85-13.61,0.61L3.49,77.45c-4.65,4.23-4.65,11.54-0.01,15.77L41.59,128L3.48,162.77 c-4.64,4.24-4.64,11.55,0.01,15.78l14.1,12.82c3.8,3.46,9.52,3.71,13.61,0.61l43.95-33.36l100.9,92.05 C177.65,252.26,179.52,253.47,181.53,254.25z M192.04,69.89L115.48,128l76.56,58.12V69.89z"/>
                  </mask>
                  <g mask="url(#mask0_1_)">
                    <path fill="#0065A9" d="M246.94,27.64l-52.75-25.4c-6.1-2.94-13.4-1.7-18.19,3.09L3.32,162.77c-4.64,4.24-4.64,11.55,0.01,15.78 l14.1,12.82c3.8,3.46,9.53,3.71,13.62,0.61L239,34.23c6.98-5.29,17-0.32,17,8.44v-0.61C256,35.91,252.48,30.3,246.94,27.64z"/>
                    <g>
                      <path fill="#007ACC" d="M246.94,228.36l-52.75,25.4c-6.1,2.94-13.4,1.7-18.19-3.09L3.32,93.23c-4.64-4.23-4.64-11.55,0.01-15.77 l14.1-12.82c3.8-3.46,9.53-3.71,13.62-0.61L239,221.77c6.98,5.29,17,0.32,17-8.44v0.61C256,220.09,252.48,225.7,246.94,228.36z"/>
                    </g>
                    <g>
                      <path fill="#1F9CF0" d="M194.2,253.76c-6.11,2.94-13.4,1.7-18.2-3.1c5.9,5.9,16,1.72,16-6.63V11.96c0-8.35-10.1-12.53-16-6.63 c4.79-4.79,12.09-6.03,18.2-3.1l52.74,25.36c5.54,2.67,9.07,8.27,9.07,14.42v171.97c0,6.15-3.52,11.75-9.07,14.42L194.2,253.76z"/>
                    </g>
                    <g opacity="0.25">
                      <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="127.8439" y1="257.34" x2="127.8439" y2="2.6598" gradientTransform="matrix(1 0 0 -1 0 258)">
                        <stop offset="0" stopColor="#FFFFFF"/>
                        <stop offset="1" stopColor="#FFFFFF" stopOpacity="0"/>
                      </linearGradient>
                      <path fillRule="evenodd" clipRule="evenodd" fill="url(#SVGID_1_)" d="M181.38,254.25c4.03,1.57,8.63,1.47,12.7-0.49l52.71-25.36c5.54-2.66,9.06-8.27,9.06-14.42V42.02 c0-6.15-3.52-11.75-9.06-14.42L194.08,2.24c-5.34-2.57-11.59-1.94-16.28,1.47c-0.67,0.49-1.31,1.03-1.91,1.63L74.99,97.39 L31.04,64.02c-4.09-3.11-9.81-2.85-13.61,0.61L3.33,77.45c-4.65,4.23-4.65,11.54-0.01,15.78L41.44,128L3.32,162.77 c-4.64,4.24-4.64,11.55,0.01,15.78l14.1,12.82c3.8,3.46,9.52,3.71,13.61,0.61l43.95-33.36l100.9,92.05 C177.49,252.26,179.36,253.47,181.38,254.25z M191.88,69.89L115.32,128l76.56,58.12V69.89z"/>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="floating-icon icon-blender">
                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 499.77 405.98" width="100%" height="100%">
                  <title>blender</title>
                  <path fill="#fff" d="M196.49,225.35c1.82-32.49,17.73-61.11,41.73-81.4,23.54-19.92,55.22-32.1,89.78-32.1S394.21,124,417.77,144c24,20.29,39.89,48.91,41.73,81.37,1.82,33.38-11.6,64.39-35.14,87.37-24,23.38-58.13,38.06-96.36,38.06s-72.43-14.68-96.41-38.06C208,289.71,194.66,258.7,196.49,225.35Z"/>
                  <path fill="#265787" d="M260.53,228.27c.93-16.67,9.1-31.36,21.41-41.77a72.65,72.65,0,0,1,92.13,0c12.3,10.41,20.47,25.1,21.41,41.75.93,17.13-6,33-18,44.83-12.31,12-29.83,19.53-49.44,19.53s-37.16-7.53-49.47-19.53C266.45,261.29,259.59,245.38,260.53,228.27Z"/>
                  <path fill="#ea7600" d="M153.08,262c.11,6.52,2.19,19.2,5.31,29.1a153.58,153.58,0,0,0,33.16,57.42,171.34,171.34,0,0,0,58,41.67A189.71,189.71,0,0,0,402,389.88,172.65,172.65,0,0,0,460,348a154.79,154.79,0,0,0,33.15-57.53,145.39,145.39,0,0,0,6.24-32.11,146.87,146.87,0,0,0-1-31.9,148.49,148.49,0,0,0-21.15-57.87,161.49,161.49,0,0,0-38.58-42.53l0,0L282.5,6.2c-.14-.11-.26-.22-.41-.32-10.24-7.86-27.47-7.83-38.73,0s-12.69,21.14-2.56,29.46l0,0,65.11,53-198.46.21h-.27C90.74,88.61,75,99.37,71.85,113c-3.21,13.86,7.93,25.36,25,25.42l0,.06,100.6-.19L17.9,276l-.69.51C.28,289.52-5.2,311.08,5.47,324.73c10.82,13.87,33.84,13.9,51,.08l98-80.18A152.15,152.15,0,0,0,153.08,262ZM404.82,298.2c-20.18,20.56-48.44,32.22-79,32.28s-58.89-11.5-79.07-32a93.92,93.92,0,0,1-21.58-33.78,87.69,87.69,0,0,1-5-37.74A89.11,89.11,0,0,1,231,191.39a98,98,0,0,1,24-28.55c19.62-16,44.6-24.65,70.73-24.68s51.12,8.54,70.76,24.48a97.5,97.5,0,0,1,24,28.46,89.19,89.19,0,0,1,10.86,35.52,87.81,87.81,0,0,1-5,37.72A94.33,94.33,0,0,1,404.82,298.2Z"/>
                </svg>
              </div>
              <div className="floating-icon icon-pr">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                  <rect x="5" y="5" width="90" height="90" rx="15" fill="#00005C" stroke="#9999FF" strokeWidth="6"/>
                  <text x="50" y="68" fontFamily="Arial, sans-serif" fontSize="46" fontWeight="bold" fill="#9999FF" textAnchor="middle">Pr</text>
                </svg>
              </div>
              <div className="floating-icon icon-ae">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                  <rect x="5" y="5" width="90" height="90" rx="15" fill="#00005C" stroke="#D998FF" strokeWidth="6"/>
                  <text x="50" y="68" fontFamily="Arial, sans-serif" fontSize="46" fontWeight="bold" fill="#D998FF" textAnchor="middle">Ae</text>
                </svg>
              </div>
            </div>
            
            <h1 className="hero-title">
              <span className="hero-subtitle">MOTION<br />DESIGNER</span>
              <span className="hero-main-text">MONTEUR<br />VIDÉO <span className="ampersand">&</span></span>
            </h1>
            <p id="work" className="hero-sub">
              Monteur Vidéo & Motion Designer | <span className="color-ae">After Effects</span>, <span className="color-pr">Premiere Pro</span> & <span className="color-blender">Blender</span>
            </p>
          </div>

          <div className="portfolio-grid">
            {/* Grid of 9 horizontal video components */}
            {youtubeVideos.map((videoId, index) => (
              <VideoCard key={index} videoId={videoId} />
            ))}
          </div>

          {/* Nouvelle section REELS REMAKES */}
          <div className="reels-header" style={{ marginTop: '8rem', marginBottom: '3rem', textAlign: 'center' }}>
            <h2 className="hero-title" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>
              <span className="hero-main-text">REELS <span className="ampersand">&</span> SHORTS</span>
            </h2>
            <p className="hero-sub" style={{ marginTop: '0.5rem', color: 'var(--violet)', opacity: 1, letterSpacing: '0.2em', fontWeight: 600 }}>REMAKES</p>
          </div>

          <div className="portfolio-grid">
            {reelVideos.map((videoId, index) => (
              <VideoCard key={`reel-${index}`} videoId={videoId} isEmpty={!videoId} />
            ))}
          </div>

          {/* Nouvelle section VRAIS REELS 9:16 */}
          <div className="reels-header" style={{ marginTop: '8rem', marginBottom: '3rem', textAlign: 'center' }}>
            <h2 className="hero-title" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>
              <span className="hero-main-text">VRAIS <span className="ampersand">REELS</span></span>
            </h2>
            <p className="hero-sub" style={{ marginTop: '0.5rem', color: 'var(--violet)', opacity: 1, letterSpacing: '0.2em', fontWeight: 600 }}>PROJETS RÉALISÉS</p>
          </div>

          <div className="portfolio-grid vertical-grid">
            {trueReels.map((videoId, index) => (
              <VideoCard key={`true-reel-${index}`} videoId={videoId} isEmpty={!videoId} isVertical={true} />
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

