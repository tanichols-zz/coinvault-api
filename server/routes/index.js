const categoriesController = require('../controllers').categories
const coinsController = require('../controllers').coins

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
  app.get('/api/categories/:categoryId/coins/:coinId', coinsController.retreive) // all
  app.put('/api/categories/:categoryId/coins/:coinId', coinsController.update) // admin
  app.delete('/api/categories/:categoryId/coins/:coinId', coinsController.destroy) // admin

  app.get('/api/coins', coinsController.list) // all
}
