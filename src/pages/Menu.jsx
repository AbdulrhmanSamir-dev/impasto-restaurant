import React from 'react';
import { Helmet } from 'react-helmet';
import MenuCategories from '../components/MenuCategories';
import menu from '../data/menu';
import { useTranslation } from 'react-i18next';

const Menu = () => {
  const { language } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{language === 'ar' ? 'القائمة - إمباستو' : 'Menu - Impasto'}</title>
        <meta name="description" content={language === 'ar' ? 'قائمة الطعام لدينا' : 'Our food menu'} />
        <html lang={language} dir={language === 'ar' ? 'rtl' : 'ltr'} />
      </Helmet>
      <div className="menu-page">
        <div className="menu-header">
          <h1>{language === 'ar' ? 'قائمتنا' : 'Our Menu'}</h1>
          <p>{language === 'ar' ? 'استمتع بأشهى المأكولات الإيطالية' : 'Experience the finest Italian cuisine'}</p>
        </div>
        <MenuCategories menu={menu} />
      </div>
    </>
  );
};

export default Menu;
