import { useState, useEffect } from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header ${scrolled ? 'sticky' : ''}`}>
      <nav className="nav-container">
        <div className="logo">
           <a href="#home">Business.</a>
        </div>
        <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? 'open' : ''}>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#service" onClick={closeMenu}>Services</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#consultion" onClick={closeMenu}>FAQ</a></li>
          <li><a href="#contacts" onClick={closeMenu}>Contact</a></li>
          <li className="theme-toggle" onClick={toggleTheme} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
            {theme === 'light' ? 
              <Brightness4Icon style={{ color: scrolled ? 'var(--color-white)' : '#fff', fontSize: '1.4rem' }} /> : 
              <Brightness7Icon style={{ color: scrolled ? 'var(--color-white)' : '#fff', fontSize: '1.4rem' }} />
            }
          </li>
        </ul>
      </nav>
    </header>
  );
}

