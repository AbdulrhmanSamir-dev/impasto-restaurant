import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaInstagram } from 'react-icons/fa';

const SocialPreview = () => {
  const { t, language } = useTranslation();

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/impasto_egypt', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="social-preview">
      <h2>{language === 'ar' ? 'تابعنا على وسائل التواصل' : 'Follow Us On Social Media'}</h2>
      <div className="social-container">
        <div className="social-facebook">
          <iframe
            title="Facebook"
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FImpastoEG%2F&tabs=timeline&width=340&height=500"
            width="340"
            height="500"
            style={{ border: 'none', overflow: 'hidden', borderRadius: '12px', background: '#1a1a1a' }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div className="social-instagram">
          <div className="instagram-card">
            <div className="instagram-icon-wrapper">
              <FaInstagram className="instagram-icon" />
            </div>
            <h3>{language === 'ar' ? 'تابعنا على إنستغرام' : 'Follow Us On Instagram'}</h3>
            <p>{language === 'ar' ? 'اكتشف أحدث وجباتنا وعروضنا وتحديثاتنا.' : 'Discover our latest meals, offers and updates.'}</p>
            <button className="instagram-btn" onClick={handleInstagramClick}>
              {language === 'ar' ? 'تابع الآن' : 'Follow Now'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialPreview;
