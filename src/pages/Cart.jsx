import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import CartDrawer from '../components/CartDrawer';
import { useTranslation } from 'react-i18next';

const Cart = () => {
  const { language } = useTranslation();
  const [open, setOpen] = useState(true);

  // Cart page simply shows cart drawer expanded
  return (
    <>
      <Helmet>
        <title>{language === 'ar' ? 'سلة الطلبات - إمباستو' : 'Cart - Impasto'}</title>
        <meta name="description" content={language === 'ar' ? 'سلة الطلب' : 'Your Cart'} />
        <html lang={language} dir={language === 'ar' ? 'rtl' : 'ltr'} />
      </Helmet>
      <CartDrawer isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Cart;