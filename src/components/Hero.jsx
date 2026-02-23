import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="container hero-content">
        <h1>{t('hero.headline')}</h1>
        <p>{t('hero.subheadline')}</p>
        <Link to="/menu" className="btn btn-primary">{t('header.orderNow')}</Link>
      </div>
    </section>
  );
};

export default Hero;