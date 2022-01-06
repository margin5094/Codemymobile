const Product = require('../models/product');

exports.getProduct = (req, res, next) => {
  const id = req.params.id;
  Product.findByPk(id)
    .then(row => {
      res.send(row);
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getProducts = (req, res, next) => {
  Product.bulkCreate([
    {
      id: 1,
      title: 'nike shirt',
      description: 'Nice shirt',
      imageUrl:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dda8bdaa-ee2e-4c21-bf84-9fa06878ed07/sportswear-mens-t-shirt-MK2TR1.png',
      price: 100,
    },
    {
      id: 2,
      title: 'addidas',
      description: 'Nice shirt',
      imageUrl:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dda8bdaa-ee2e-4c21-bf84-9fa06878ed07/sportswear-mens-t-shirt-MK2TR1.png',
      price: 100,
    },
    {
      id: 3,
      title: 'USPOLO',
      description: 'Nice shirt',
      imageUrl:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dda8bdaa-ee2e-4c21-bf84-9fa06878ed07/sportswear-mens-t-shirt-MK2TR1.png',
      price: 100,
    },
    {
      id: 4,
      title: 'CK',
      description: 'Nice shirt',
      imageUrl:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dda8bdaa-ee2e-4c21-bf84-9fa06878ed07/sportswear-mens-t-shirt-MK2TR1.png',
      price: 100,
    },
  ]).catch(err => {
    console.log(err);
  });

  Product.findAll()
    .then(rows => {
      res.send(rows);
    })
    .catch(err => {
      console.log(err);
    });
};
