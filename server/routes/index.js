const categoriesController = require('../controllers').categories
const coinsController = require('../controllers').coins

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the CoinVault API!'
  }))

  app.get('/api/categories', categoriesController.list)
  app.post('/api/categories', categoriesController.create)
  app.get('/api/categories/:categoryId', categoriesController.retreive)
  app.put('/api/categories/:categoryId', categoriesController.update)
  app.delete('/api/categories/:categoryId', categoriesController.destroy)

  app.get('/api/coins', coinsController.list)

  app.get('/api/categories/:categoryId/coins', coinsController.list)
  app.post('/api/categories/:categoryId/coins', coinsController.create)
  app.get('/api/categories/:categoryId/coins/:coinId', coinsController.retreive)
  app.put('/api/categories/:categoryId/coins/:coinId', coinsController.update)
  app.delete('/api/categories/:categoryId/coins/:coinId', coinsController.destroy)

  // users

  // users_coins

  // tags

  // auth
}
