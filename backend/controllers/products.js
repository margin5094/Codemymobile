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
      title: 'Iphone',
      imageUrl: 'imageUrls/iphone.jpg',
      description: 'Best iphone Ever!',
      price: 80000,
    },
    {
      id: 2,
      title: 'MacBook',
      imageUrl: 'imageUrls/laptop.jpg',
      description: 'Best Mac Ever!',
      price: 60000,
    },
    {
      id: 3,
      title: 'Lenovo Legion',
      imageUrl: 'imageUrls/lenovo.jpg',
      description: 'Best Gaming laptop Ever!',
      price: 70000,
    },
    {
      id: 4,
      title: 'Airpods',
      imageUrl: 'imageUrls/airpods.jpg',
      description: 'Best airpods Ever!',
      price: 20000,
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
