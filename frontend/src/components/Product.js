import React from 'react';

export const Product = props => {
  const {product} = props;
  return (
    <div key={product.id} className='card'>
      <a href={`product/${product.id}`}>
        <img className='medium' src={product.imageUrl} alt={product.title} />
      </a>
      <div className='card-body'>
        <a href={`product/${product.id}`}>
          <h2>{product.title}</h2>
        </a>
      </div>
      <div className='price'>&#8377;{product.price}</div>
    </div>
  );
};
