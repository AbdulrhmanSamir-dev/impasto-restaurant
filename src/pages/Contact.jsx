import React from 'react';
import { Helmet } from 'react-helmet';
import GoogleMapEmbed from '../components/GoogleMapEmbed';
import { useTranslation } from 'react-i18next';
import { FaPhone, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  const { language, t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{language === 'ar' ? 'اتصل بنا - إمباستو' : 'Contact - Impasto'}</title>
        <meta name="description" content={language === 'ar' ? 'معلومات الاتصال' : 'Contact information'} />
        <html lang={language} dir={language === 'ar' ? 'rtl' : 'ltr'} />
      </Helmet>
      <section className="contact container">
        <h2>{t('contact.title')}</h2>
        <p>
          <strong>{t('contact.address')}:</strong> ميدان الجامعة - أمام صيدلية د محمود ماجد, Itay al Barud, Egypt
        </p>
        <p>
          <strong>{t('contact.phoneCalls')}:</strong> <a href="tel:01040303242" className="phone-link"><FaPhoneAlt className="phone-icon" /> 01040303242</a>
        </p>
        <p>
          <strong>{t('contact.phoneCallsOnly')}:</strong> <a href="tel:01120951961" className="phone-link"><FaPhone className="phone-icon" /> 01120951961</a>
        </p>
        <p>
          <strong>{t('contact.email')}:</strong> impastoegypt@gmail.com
        </p>
        <GoogleMapEmbed />
      </section>
    </>
  );
};

export default Contact;
