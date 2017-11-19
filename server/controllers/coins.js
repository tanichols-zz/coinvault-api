const coin = require('../models').coin

module.exports = {
  create (req, res) {
    return coin
      .create({
        name: req.body.name,
        year: req.body.year,
        image_link: req.body.image_link,
        description: req.body.description,
        category_id: req.params.categoryId
      })
      .then(coin => {
        res.status(201).send(coin)
      })
      .catch(error => {
        console.log(error)
        res.status(400).send(error)
      })
  },
  list (req, res) {
    let categoryId = req.params.categoryId || req.query.categoryId
    if (categoryId) {
      return coin
        .findAll({
          where: {
            category_id: categoryId
          }
        })
        .then(coins => {
          res.status(200).send(coins)
        })
        .catch(error => {
          console.log(error)
          res.status(400).send(error)
        })
    }
    return coin
      .all()
      .then(coins => {
        res.status(200).send(coins)
      })
      .catch(error => {
        console.log(error)
        res.status(400).send(error)
      })
  },
  retreive (req, res) {
    return coin
      .findById(req.params.coinId)
      .then(coin => {
        if (!coin) {
          return res.status(404).send({
            message: 'Coin Not Found'
          })
        }
        res.status(200).send(coin)
      })
      .catch(error => {
        console.log(error)
        res.status(400).send(error)
      })
  },
  update (req, res) {
    return coin
      .findById(req.params.coinId)
      .then(coin => {
        if (!coin) {
          return res.status(404).send({
            message: 'Coin Not Found'
          })
        }
        return coin
          .update(req.body, { fields: Object.keys(req.body) })
          .then(() => {
            res.status(204).send()
          })
          .catch(error => {
            console.log(error)
            res.status(400).send(error)
          })
      })
      .catch(error => {
        console.log(error)
        res.status(400).send(error)
      })
  },
  destroy (req, res) {
    return coin
      .findById(req.params.coinId)
      .then(coin => {
        if (!coin) {
          return res.status(404).send({
            message: 'Coin Not Found'
          })
        }
        return coin
          .destroy()
          .then(() => {
            res.status(204).send()
          })
          .catch(error => {
            console.log(error)
            res.status(400).send(error)
          })
      })
      .catch(error => {
        console.log(error)
        res.status(400).send(error)
      })
  }
}
