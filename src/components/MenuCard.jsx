import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { LanguageContext } from '../context/LanguageContext';

const MenuCard = ({ item, categoryName }) => {
  const { language } = useContext(LanguageContext);
  const { addToCart } = useContext(CartContext);
  
  // Check if item has two sizes (small and large)
  const hasTwoSizes = item.prices && item.prices.small !== undefined && item.prices.large !== undefined;
  // Check if item has only single price
  const hasSinglePrice = item.prices && item.prices.small !== undefined && !item.prices.large;
  
  const [size, setSize] = useState(hasTwoSizes ? 'small' : null);
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  // Calculate price - use small if available, otherwise single price
  const price = hasTwoSizes 
    ? (size === 'large' ? item.prices.large : item.prices.small)
    : (item.prices?.small || 0);

  const handleAdd = () => {
    setIsAdding(true);
    addToCart({
      id: item.id,
      name: item.name,
      size,
      quantity,
      notes,
      price,
    });
    setTimeout(() => {
      setQuantity(1);
      setNotes('');
      setIsAdding(false);
    }, 300);
  };

  return (
    <div className={`menu-card ${isAdding ? 'adding' : ''}`}>
      <div className="menu-card-header">
        <span className="category-label">{categoryName}</span>
        <h3 className="item-name">{item.name[language]}</h3>
      </div>
      
      {item.description && (
        <p className="item-description">{item.description[language]}</p>
      )}

      {hasTwoSizes ? (
        <div className="size-selector">
          <button
            className={`size-btn ${size === 'small' ? 'selected' : ''}`}
            onClick={() => setSize('small')}
          >
            <span className="size-label">{language === 'ar' ? 'صغير' : 'Small'}</span>
            <span className="size-price">{item.prices.small} LE</span>
          </button>
          <button
            className={`size-btn ${size === 'large' ? 'selected' : ''}`}
            onClick={() => setSize('large')}
          >
            <span className="size-label">{language === 'ar' ? 'كبير' : 'Large'}</span>
            <span className="size-price">{item.prices.large} LE</span>
          </button>
        </div>
      ) : (
        <div className="single-price">
          <span className="price">{price} LE</span>
        </div>
      )}

      <div className="menu-card-footer">
        <div className="quantity-selector">
          <button 
            className="qty-btn" 
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            disabled={quantity <= 1}
          >
            −
          </button>
          <span className="qty-value">{quantity}</span>
          <button 
            className="qty-btn"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>

        <div className="total-price">
          <span className="total-label">{language === 'ar' ? 'الإجمالي' : 'Total'}</span>
          <span className="total-value">{price * quantity} LE</span>
        </div>
      </div>

      <textarea
        className="notes-input"
        placeholder={language === 'ar' ? 'ملاحظات خاصة (اختياري)...' : 'Special notes (optional)...'}
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        rows={2}
      />

      <button 
        onClick={handleAdd} 
        className={`btn btn-add-to-cart ${isAdding ? 'added' : ''}`}
        disabled={isAdding}
      >
        {isAdding 
          ? (language === 'ar' ? '✓ تم الإضافة' : '✓ Added') 
          : (language === 'ar' ? 'أضف إلى السلة' : 'Add to Cart')
        }
      </button>
    </div>
  );
};

export default MenuCard;
