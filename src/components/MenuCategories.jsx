import React, { useContext } from 'react';
import MenuCard from './MenuCard';
import { LanguageContext } from '../context/LanguageContext';

const MenuCategories = ({ menu }) => {
  const { language } = useContext(LanguageContext);

  return (
    <section className="menu-categories container">
      {menu.map((category) => (
        <div key={category.categoryId} className="menu-category">
          <div className="category-header">
            <h2 className="category-title">{category.categoryName[language]}</h2>
            <div className="category-decoration"></div>
          </div>
          <div className="menu-items">
            {category.items.map((item) => (
              <MenuCard 
                key={item.id} 
                item={item} 
                categoryName={category.categoryName[language]}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default MenuCategories;
