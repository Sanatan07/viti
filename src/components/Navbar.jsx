import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Prevent body scrolling when menu is open
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'visible'; // Reset on unmount
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          ROHAN BUILDERS
        </div>

        {/* Hamburger Menu Button (visible only on mobile/tablet) */}
        <div className="hamburger-menu">
          <button 
            onClick={toggleMenu}
            className="hamburger-button"
            aria-label="Toggle menu"
          >
            <span className={`hamburger-icon ${menuOpen ? 'open' : ''}`}>
              <span className="line line-1"></span>
              <span className="line line-2"></span>
              <span className="line line-3"></span>
            </span>
          </button>
        </div>

        {/* Desktop Navigation (hidden on mobile/tablet) */}
        <div className="desktop-nav">
          <NavItem label="Location" />
          <NavItem label="Gallery" />
          <NavItem label="Master Plan" />
          <NavItem label="Floor Plan" />
          <NavItem label="Specifications" />
          <NavItem label="Contact" />
        </div>
      </div>

      {/* Mobile/Tablet Navigation (full-width dropdown) */}
      <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        <NavItem label="Location" mobile onClick={() => setMenuOpen(false)} />
        <NavItem label="Gallery" mobile onClick={() => setMenuOpen(false)} />
        <NavItem label="Master Plan" mobile onClick={() => setMenuOpen(false)} />
        <NavItem label="Floor Plan" mobile onClick={() => setMenuOpen(false)} />
        <NavItem label="Specifications" mobile onClick={() => setMenuOpen(false)} />
        <NavItem label="Contact" mobile onClick={() => setMenuOpen(false)} />
      </div>
    </nav>
  );
};

// Helper component for nav items
const NavItem = ({ label, mobile, onClick }) => {
  const id = label.toLowerCase().replace(' ', '-');
  
  return (
    <Link
      to={id}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      className={`nav-item ${mobile ? 'mobile-nav-item' : ''}`}
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default Navbar;