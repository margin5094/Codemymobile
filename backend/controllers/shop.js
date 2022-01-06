const Product = require('../models/product');

exports.getCart = (req, res, next) => {
  req.user.getCart().then(cart => {
    return cart
      .getProducts()
      .then(products => {
        res.send(products);
      })
      .catch(err => console.log(err));
  });
};

exports.postCart = (req, res, next) => {
  const prodId = req.params.id;
  let fetchedCart;
  req.user
    .getCart()
    .then(cart => {
      fetchedCart = cart;
      return cart.getProducts({where: {id: prodId}});
    })
    .then(products => {
      let product;
      if (products.length > 0) {
        product = products[0];
      }
      let newQuantity = 1;
      if (product) {
        const oldQuantity = product.cartItem.quantity;
        newQuantity = oldQuantity + 1;
        return fetchedCart.addProduct(product, {
          through: {quantity: newQuantity},
        });
      }
      return Product.findByPk(prodId)
        .then(product => {
          return fetchedCart.addProduct(product, {
            through: {quantity: newQuantity},
          });
        })
        .catch(err => console.log(err));
    })
    .then(() => {
      res.send({message: 'success!'});
    })
    .catch(err => {
      console.log(err);
    });
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  req.user
    .getCart()
    .then(cart => {
      return cart.getProducts({where: {id: prodId}});
    })
    .then(products => {
      const prod = products[0];
      return prod.cartItem.destroy();
    })
    .then(() => {
      res.send({message: 'Product deleted!'});
    })
    .catch(err => {
      console.log(err);
    });
};

exports.postOrder = (req, res, next) => {
  let fetchedCart;
  req.user
    .getCart()
    .then(cart => {
      fetchedCart = cart;
      return cart.getProducts();
    })
    .then(products => {
      const add = req.body.address;
      return req.user
        .createOrder({address: add})
        .then(order => {
          return order.addProducts(
            products.map(product => {
              product.orderItem = {quantity: product.cartItem.quantity};
              return product;
            })
          );
        })
        .catch(err => console.log(err));
    })
    .then(() => {
      return fetchedCart.setProducts(null);
    })
    .then(() => {
      res.send({message: 'order Placed!'});
    })
    .catch(err => console.log(err));
};

exports.getOrders = (req, res, next) => {
  req.user
    .getOrders({include: ['products']})
    .then(orders => {
      res.send(orders);
    })
    .catch(err => console.log(err));
};
