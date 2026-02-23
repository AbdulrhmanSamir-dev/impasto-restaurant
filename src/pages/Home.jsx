import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../components/Hero';
import Reviews from '../components/Reviews';
import SocialPreview from '../components/SocialPreview';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { language, t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{language === 'ar' ? 'إمباستو - مطعم توصيل' : 'Impasto - Delivery Restaurant'}</title>
        <meta
          name="description"
          content={language === 'ar' ? 'أفضل بيتزا إيطالية يتم توصيلها بسرعة.' : 'Best Italian pizza, delivered fast.'}
        />
        <html lang={language} dir={language === 'ar' ? 'rtl' : 'ltr'} />
      </Helmet>
      <Hero />
      <Reviews />
      <SocialPreview />
    </>
  );
};

export default Home;