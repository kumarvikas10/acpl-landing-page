// src/components/Navbar/Navbar.jsx
import { useState } from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/acpl-logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
            <a href="/"><img src={logo} alt="ACPL" className={styles.logoImage} /></a>
        </div>
        <ul className={styles.navLinks}>
          <li><a href="#about" className={styles.navLink}>About Us</a></li>
          <li><a href="#services" className={styles.navLink}>Services</a></li>
          <li><a href="#global" className={styles.navLink}>ACPL Global Website</a></li>
        </ul>
        <div className={styles.ctaButton}>
          <a href="#assessment" className={styles.assessmentBtn}>Free Assessment</a>
        </div>
        <button 
          className={styles.menuToggle}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
          <ul className={styles.mobileNavLinks}>
            <li><a href="#about" onClick={closeMenu}>About Us</a></li>
            <li><a href="#services" onClick={closeMenu}>Services</a></li>
            <li><a href="#global" onClick={closeMenu}>ACPL Global Website</a></li>
            <li>
              <a href="#assessment" className={styles.mobileAssessmentBtn} onClick={closeMenu}>
                Free Assessment
              </a>
            </li>
          </ul>
        </div>
      </div>
      {isMenuOpen && (
        <div 
          className={styles.overlay} 
          onClick={closeMenu}
          aria-hidden="true"
        ></div>
      )}
    </nav>
  );
};

export default Navbar;