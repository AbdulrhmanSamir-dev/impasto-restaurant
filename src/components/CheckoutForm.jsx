import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { LanguageContext } from '../context/LanguageContext';
import { useTranslation } from 'react-i18next';
import { FaCheck } from 'react-icons/fa';

const phoneNumber = '201040303242';

const CheckoutForm = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const { language } = useContext(LanguageContext);
  const { t } = useTranslation();

  const [showSuccess, setShowSuccess] = useState(false);

  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    notes: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    
    // Name: Required, letters only (Arabic and English), no numbers
    if (!form.name) {
      errs.name = language === 'ar' ? 'الاسم مطلوب' : 'Name is required';
    } else if (!/^[a-zA-Z\u0600-\u06FF\s]+$/.test(form.name)) {
      errs.name = language === 'ar' ? 'الاسم يجب أن يحتوي على حروف فقط' : 'Name must contain only letters';
    }
    
    // Phone: Required, numbers only, no letters
    if (!form.phone) {
      errs.phone = language === 'ar' ? 'الهاتف مطلوب' : 'Phone is required';
    } else if (!/^[0-9]+$/.test(form.phone)) {
      errs.phone = language === 'ar' ? 'الهاتف يجب أن يحتوي على أرقام فقط' : 'Phone must contain only numbers';
    }
    
    // Address: Required
    if (!form.address) errs.address = language === 'ar' ? 'العنوان مطلوب' : 'Address is required';
    
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const formatOrderMessage = () => {
    let message = language === 'ar' ? 'تفاصيل الطلب:\n' : 'Order Details:\n';

    cartItems.forEach((item, idx) => {
      const name = item.name[language];
      const sizeText = item.size ? (language === 'ar' ? `الحجم: ${item.size}` : `Size: ${item.size}`) : '';
      const qtyText = language === 'ar' ? `الكمية: ${item.quantity}` : `Quantity: ${item.quantity}`;
      const notesText = item.notes ? (language === 'ar' ? `ملاحظات: ${item.notes}` : `Notes: ${item.notes}`) : '';
      message += `${idx + 1}. ${name}\n${sizeText}\n${qtyText}\n${notesText}\n\n`;
    });

    const total = cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
    message += language === 'ar' ? `الإجمالي: ${total} جنيه\n` : `Total: ${total} LE\n`;
    message += language === 'ar'
      ? `\nالاسم: ${form.name}\nالهاتف: ${form.phone}\nالعنوان: ${form.address}`
      : `\nName: ${form.name}\nPhone: ${form.phone}\nAddress: ${form.address}`;
    if(form.notes) {
      message += language === 'ar' 
        ? `\nملاحظات إضافية: ${form.notes}`
        : `\nAdditional notes: ${form.notes}`;
    }
    return encodeURIComponent(message);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Show success animation
    setShowSuccess(true);

    // Proceed to WhatsApp after 2 seconds
    setTimeout(() => {
      setShowSuccess(false);
      const url = `https://wa.me/${phoneNumber}?text=${formatOrderMessage()}`;
      window.open(url, '_blank');
      clearCart();
    }, 2000);
  };

  return (
    <>
      {showSuccess && (
        <div className="success-modal-overlay">
          <div className="success-modal">
            <div className="success-circle">
              <FaCheck className="success-checkmark" />
            </div>
            <p className="success-text">
              {language === 'ar' ? 'تم إرسال الطلب بنجاح' : 'Order Sent Successfully'}
            </p>
          </div>
        </div>
      )}

      <form className="checkout-form" onSubmit={handleSubmit} noValidate>
        <h2>{t('checkout.title')}</h2>

        <label>
          {t('checkout.name')}
          <input
            type="text"
            value={form.name}
            onChange={e => setForm({...form, name: e.target.value})}
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </label>

        <label>
          {t('checkout.phone')}
          <input
            type="tel"
            value={form.phone}
            onChange={e => setForm({...form, phone: e.target.value})}
            required
          />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </label>

        <label>
          {t('checkout.address')}
          <textarea
            rows="3"
            value={form.address}
            onChange={e => setForm({...form, address: e.target.value})}
            required
          />
          {errors.address && <p className="error">{errors.address}</p>}
        </label>

        <label>
          {t('checkout.notes')}
          <textarea
            rows="2"
            value={form.notes}
            onChange={e => setForm({...form, notes: e.target.value})}
          />
        </label>

        <label>
          {t('checkout.paymentMethod')}
          <select disabled defaultValue="cod">
            <option value="cod">{t('checkout.cashOnDelivery')}</option>
          </select>
        </label>

        <button type="submit" className="btn btn-primary">{t('checkout.placeOrder')}</button>
      </form>
    </>
  );
};

export default CheckoutForm;
