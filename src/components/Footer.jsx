import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { useTranslation } from 'react-i18next';
import { FaPhone, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const { language } = useContext(LanguageContext);
  const { t } = useTranslation();

  return (
    <>
      <footer className={`footer ${language === 'ar' ? 'rtl' : 'ltr'}`}>
        <div className="container">
          <p>© 2024 Impasto. All rights reserved.</p>
          <p>
            <FaMapMarkerAlt className="footer-icon" /> 
            ميدان الجامعة - أمام صيدلية د محمود ماجد, Itay al Barud, Egypt
          </p>
          <p>
            <a href="tel:01040303242" className="phone-link"><FaPhoneAlt className="phone-icon" /> 01040303242</a> 
            <span className="phone-label">({language === 'ar' ? 'مكالمات وواتساب' : 'Calls & WhatsApp'})</span>
            {' | '}
            <a href="tel:01120951961" className="phone-link"><FaPhone className="phone-icon" /> 01120951961</a> 
            <span className="phone-label">({language === 'ar' ? 'مكالمات فقط' : 'Calls Only'})</span>
          </p>
          <p>
            <FaEnvelope className="footer-icon" /> impastoegypt@gmail.com
          </p>
          <div className="social-links">
            <a href="https://www.facebook.com/ImpastoEG/" target="_blank" rel="noreferrer" aria-label="Facebook">Facebook</a> | 
            <a href="https://www.instagram.com/impasto_egypt" target="_blank" rel="noreferrer" aria-label="Instagram">Instagram</a>
          </div>
        </div>
      </footer>
      
      <a 
        href="tel:01024094173" 
        className="developer-watermark"
        aria-label="Call Developer"
      >
        Developed by 𝓐𝓫𝓭𝓾𝓵𝓻𝓪𝓱𝓶𝓪𝓷 | 01024094173
      </a>
    </>
  );
};

export default Footer;
