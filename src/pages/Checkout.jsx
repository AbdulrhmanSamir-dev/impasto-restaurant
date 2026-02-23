import React from 'react';
import { Helmet } from 'react-helmet';
import CheckoutForm from '../components/CheckoutForm';
import { useTranslation } from 'react-i18next';

const Checkout = () => {
  const { language } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{language === 'ar' ? 'الدفع - إمباستو' : 'Checkout - Impasto'}</title>
        <meta name="description" content={language === 'ar' ? 'صفحة الدفع' : 'Checkout page'} />
        <html lang={language} dir={language === 'ar' ? 'rtl' : 'ltr'} />
      </Helmet>
      <CheckoutForm />
    </>
  );
};

export default Checkout;