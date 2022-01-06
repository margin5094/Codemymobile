import axios from 'axios';
import React, {useEffect, useState} from 'react';

export const Cart = props => {
  axios
    .post(`/cart/${+props.match.params.id}`)
    .then(res => {
      console.log(res);
    })
    .catch();
  const [cart, setCarts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(`/cart`);
      setCarts(data.data);
    };
    fetchData();
  }, []);
  let total = 0;
  cart.map(x => {
    total = total + x.cartItem.quantity * x.price;
  });
  const checkout = () => {
    props.history.push('/checkout');
  };

  return (
    <div>
      <h1>
        {cart.length > 0 ? (
          cart.map(curEle => (
            <>
              <h1>{curEle.title}</h1>
              <h1>Total Quantity: {curEle.cartItem.quantity}</h1>
              <h1>Total Price: {total}</h1>
              <div>
                <button className='btn btn-primary' onCLick={checkout}>
                  Checkout
                </button>
              </div>
            </>
          ))
        ) : (
          <h1>Cart is Empty!</h1>
        )}
      </h1>
    </div>
  );
};
