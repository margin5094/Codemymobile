const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/products');
const shopRoutes = require('./routes/shop');
const userRoutes = require('./routes/user');
const sequelize = require('./util/database');
const Product = require('./models/product');
const User = require('./models/user');
const Cart = require('./models/cart');
const CartItem = require('./models/cartItem');
const Order = require('./models/order');
const OrderItem = require('./models/orderItem');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  User.findByPk(1)
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => {
      console.log(err);
    });
});

app.use(productRoutes);
app.use(shopRoutes);
app.use(userRoutes);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, {through: CartItem});
Product.belongsToMany(Cart, {through: CartItem});
Order.belongsTo(User);
User.hasMany(Order);
Order.belongsToMany(Product, {through: OrderItem});

sequelize
  .sync()
  .then(result => {
    return User.findByPk(1);
  })
  .then(user => {
    if (!user) {
      return User.create({email: 'margin@gmail.com', password: 'margin'});
    }
    return user;
  })
  .then(result => {
    app.listen(8080);
  })
  .catch(err => console.log(err));
