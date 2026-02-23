import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { LanguageContext } from '../context/LanguageContext';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const CartDrawer = ({ isOpen, onClose }) => {
  const { cartItems, updateQuantity, removeFromCart, clearCart } = useContext(CartContext);
  const { language } = useContext(LanguageContext);
  const { t } = useTranslation();

  const total = cartItems.reduce((acc, item) => acc + (item.price || 0) * (item.quantity || 1), 0);

  if (!isOpen) return null;

  const getItemName = (item) => {
    if (!item.name) return 'Item';
    if (typeof item.name === 'string') return item.name;
    if (typeof item.name === 'object') return item.name[language] || item.name.en || 'Item';
    return 'Item';
  };

  const getSizeDisplay = (size) => {
    if (!size) return null;
    const sizeLabel = size === 'small' 
      ? (language === 'ar' ? 'صغير' : 'Small')
      : (language === 'ar' ? 'كبير' : 'Large');
    return language === 'ar' ? `الحجم: ${sizeLabel}` : `Size: ${sizeLabel}`;
  };

  return (
    <aside className="cart-drawer">
      <button className="close-btn" onClick={onClose}>×</button>
      <h2>{t('cart.title')}</h2>
      {cartItems.length === 0 ? (
        <p>{t('cart.empty')}</p>
      ) : (
        <ul>
          {cartItems.map((item, idx) => (
            <li key={`${item.id}-${item.size || 'nosize'}`}>
              <div className="cart-item-header">
                <h3 className="cart-item-name">{getItemName(item)}</h3>
              </div>
              {item.size && (
                <p className="cart-item-size">{getSizeDisplay(item.size)}</p>
              )}
              <div className="cart-item-controls">
                <div className="qty-control">
                  <button disabled={item.quantity <= 1} onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}>+</button>
                </div>
                <span className="cart-item-price">{(item.price || 0) * (item.quantity || 1)} LE</span>
              </div>
              {item.notes && <p className="cart-item-notes"><small>{item.notes}</small></p>}
              <button className="remove-btn" onClick={() => removeFromCart(item.id, item.size)}>
                {language === 'ar' ? 'حذف' : 'Remove'}
              </button>
            </li>
          ))}
        </ul>
      )}
      <p className="cart-total">
        {t('cart.total')}: {total} LE
      </p>
      <div className="cart-actions">
        <button onClick={clearCart} disabled={cartItems.length === 0}>
          {t('cart.clear')}
        </button>
        <Link 
          to={cartItems.length > 0 ? "/checkout" : "#"} 
          onClick={cartItems.length > 0 ? onClose : (e) => e.preventDefault()} 
          className={`btn btn-primary ${cartItems.length === 0 ? 'btn-disabled' : ''}`}
          style={{ opacity: cartItems.length === 0 ? 0.5 : 1, cursor: cartItems.length === 0 ? 'not-allowed' : 'pointer' }}
        >
          {t('cart.checkout')}
        </Link>
      </div>
    </aside>
  );
};

export default CartDrawer;
