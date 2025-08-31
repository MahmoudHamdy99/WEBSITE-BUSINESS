import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <nav>
        <div className="hamburger" onClick={toggleMenu}>
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
        </ul>
      </nav>
    </header>
  );
}

