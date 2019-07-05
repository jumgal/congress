const express = require('express');
const router = express.Router();

module.exports = () => {
  router.get('/', function(req, res, next){
    return res.send('All users');
  });

  router.get('/:id', function(req, res, next){
    return res.send('Page for user with ID ' + req.params.id);
  });

  return router;
}