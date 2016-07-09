'use strict';

import User from '../user/user.model';

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    return res.status(statusCode).send(err);
  };
}

/**
 * Creates a new user
 */
export function checkEmail(req, res, next) {
  var email = req.query.email;

  return User.findOne({email: email}).exec()
    .then(user => {
      if (user) {
        res.json(true);
      } else {
        res.json(false);
      }
    })
    .catch(err => {
      handleError(err)
    });
}
