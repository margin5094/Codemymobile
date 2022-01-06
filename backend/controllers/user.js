const User = require('../models/user');
const jwt = require('jsonwebtoken');
exports.postUser = (req, res, next) => {
  User.findAll({where: {email: req.body.email}})
    .then(user => {
      if (user[0]) {
        res.send({
          id: user[0].id,
          email: user[0].email,
          token: jwt.sign({id: user.id, email: user.email}, 'secret', {
            expiresIn: '1h',
          }),
        });
        console.log(user);
        return;
      }
      res.status(401).send({message: 'invalid user!'});
    })
    .catch();
};
