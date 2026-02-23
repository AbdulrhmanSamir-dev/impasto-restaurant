import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';
import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa';

const Header = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const { t } = useTranslation();

  return (
    <header className={`header ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <nav className="nav-container">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="Impasto" />
        </Link>
        <ul className="nav-links">
          <li><NavLink to="/" end>{t('header.home')}</NavLink></li>
          <li><NavLink to="/menu">{t('header.menu')}</NavLink></li>
          <li><NavLink to="/contact">{t('header.contact')}</NavLink></li>
          <li><NavLink to="/cart">{t('header.cart')}</NavLink></li>
          <li>
            <button onClick={toggleLanguage} className="lang-switcher" aria-label="Switch language">
              <FaGlobe className="lang-icon" />
              {language === 'en' ? 'العربية' : 'English'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
