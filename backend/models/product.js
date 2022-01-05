const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Product = sequelize.define('product', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  title: Sequelize.STRING,
  price: Sequelize.DOUBLE,
  imageUrl: Sequelize.STRING,
  description: Sequelize.STRING,
});

module.exports = Product;

// const products = [
//   {
//     id: 1,
//     name: 'Iphone',
//     image: 'images/iphone.jpg',
//     description: 'Best iphone Ever!',
//     price: 80000,
//   },
//   {
//     id: 2,
//     name: 'MacBook',
//     image: 'images/laptop.jpg',
//     description: 'Best Mac Ever!',
//     price: 60000,
//   },
//   {
//     id: 3,
//     name: 'Lenovo Legion',
//     image: 'images/lenovo.jpg',
//     description: 'Best Gaming laptop Ever!',
//     price: 70000,
//   },
//   {
//     id: 4,
//     name: 'Airpods',
//     image: 'images/airpods.jpg',
//     description: 'Best airpods Ever!',
//     price: 20000,
//   },
// // ];

// module.exports = products;
