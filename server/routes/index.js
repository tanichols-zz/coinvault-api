const categoriesController = require('../controllers').categories
const coinsController = require('../controllers').coins
const userController = require('../controllers').users

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the CoinVault API!'
  }))

  app.get('/api/categories', categoriesController.list) // all
  app.post('/api/categories', categoriesController.create) // admin
  app.get('/api/categories/:categoryId', categoriesController.retreive) // all
  app.put('/api/categories/:categoryId', categoriesController.update) // admin
  app.delete('/api/categories/:categoryId', categoriesController.destroy) // admin

  app.get('/api/categories/:categoryId/coins', coinsController.list) // all
  app.post('/api/categories/:categoryId/coins', coinsController.create) // admin
  app.get('/api/categories/:categoryId/coins/:coinId', coinsController.retreive) // admin
  app.put('/api/categories/:categoryId/coins/:coinId', coinsController.update) // admin
  app.delete('/api/categories/:categoryId/coins/:coinId', coinsController.destroy) // admin

  app.get('/api/coins', coinsController.list) // all

  app.get('/api/users', userController.list) // all
  app.post('/api/users', userController.create) // admin
  app.get('/api/users/:userId', userController.retreive) // admin
  app.put('/api/users/:userId', userController.update) // admin
  app.delete('/api/users/:userId', userController.destroy) // admin

  // users_coins / collected_coins
  // get // self,admin
  // post // self,admin
  // get/one // self,admin
  // put/one // self,admin
  // delete/one // self,admin

  // Stretch Goal:
  // tags
  // get // all
  // post // admin
  // get/one // all
  // put/one // admin
  // delete/one // admin

  // coin_tags
  // get // all
  // post // admin
  // get/one // all
  // put/one // admin
  // delete/one // admin

  // roles / auth
  // all
  // self
  // admin
}
