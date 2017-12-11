const jwt = require('express-jwt')
const jwks = require('jwks-rsa')

const categoriesController = require('../controllers').categories
const coinsController = require('../controllers').coins

const authCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestPerMinute: 5,
    jwksUri: 'https://tanichols.auth0.com/.well-known/jwks.json'
  }),
  audience: 'coinvault',
  issuer: 'https://tanichols.auth0.com/',
  algorithms: ['RS256']
})

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the CoinVault API!'
  }))

  app.get('/api/categories', categoriesController.list) // all
  app.post('/api/categories', authCheck, categoriesController.create) // admin
  app.get('/api/categories/:categoryId', categoriesController.retreive) // all
  app.put('/api/categories/:categoryId', authCheck, categoriesController.update) // admin
  app.delete('/api/categories/:categoryId', authCheck, categoriesController.destroy) // admin

  app.get('/api/categories/:categoryId/coins', coinsController.list) // all
  app.post('/api/categories/:categoryId/coins', authCheck, coinsController.create) // admin
  app.get('/api/categories/:categoryId/coins/:coinId', coinsController.retreive) // all
  app.put('/api/categories/:categoryId/coins/:coinId', authCheck, coinsController.update) // admin
  app.delete('/api/categories/:categoryId/coins/:coinId', authCheck, coinsController.destroy) // admin

  app.get('/api/coins', coinsController.list) // all
  app.get('/api/coins/:coinId', coinsController.retreive)
  app.put('/api/coins/:coinId', authCheck, coinsController.update)
  app.delete('/api/coins/:coinId', authCheck, coinsController.destroy)
}
