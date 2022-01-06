import React, {useEffect, useState} from 'react';
import axios from 'axios';

export const ProductDetail = props => {
  const [product, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const {data} = await axios.get(`/products/${+props.match.params.id}`);
      setProducts(data);
    };
    fetchData();
  }, []);

  const addToCart = () => {
    props.history.push(`/cart/${+props.match.params.id}?`);
  };
  return (
    <div className='row top'>
      <div>
        <img className='large' src={product.imageUrl} alt={product.name}></img>
      </div>
      <div>
        <ul>
          <li>
            <h1>{product.title}</h1>
          </li>
          <li>Price:&#8377;{product.price}</li>
          <li>
            Description:
            <p>{product.description}</p>
          </li>
        </ul>
        <button className='btn btn-primary ' onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};
