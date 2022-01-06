import React, {useEffect, useState} from 'react';
import {Product} from '../components/Product';
import axios from 'axios';
export const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const {data} = await axios.get('/products');
      setProducts(data);
    };
    fetchData();
  }, []);
  return (
    <div className='row center'>
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};
