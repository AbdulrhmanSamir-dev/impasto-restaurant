import React from 'react';
import { useTranslation } from 'react-i18next';

const reviewsData = [
  {
    name: 'Ahmed',
    rating: 5,
    comment: 'Great food and fast delivery!',
    date: '2023-04-01'
  },
  {
    name: 'Sara',
    rating: 4,
    comment: 'Delicious pizza, will order again.',
    date: '2023-03-20'
  }
];

const Reviews = () => {
  const { t } = useTranslation();

  return (
    <section className="reviews container">
      <h2>{t('reviews.title')}</h2>
      <ul>
        {reviewsData.map(({ name, rating, comment, date }, idx) => (
          <li key={idx}>
            <p><strong>{name}</strong> ({new Date(date).toLocaleDateString()})</p>
            <p>{'⭐'.repeat(rating)}</p>
            <p>{comment}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Reviews;