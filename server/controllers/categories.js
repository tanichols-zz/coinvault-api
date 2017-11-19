const category = require('../models').category
const coin = require('../models').coin
const tag = require('../models').tag

module.exports = {
  create (req, res) {
    return category
      .create({
        title: req.body.title,
        description: req.body.description
      })
      .then(category => {
        res.status(201).send(category)
      })
      .catch(error => {
        console.log(error)
        res.status(400).send(error)
      })
  },
  list (reg, res) {
    return category
      .all()
      .then(categories => {
        res.status(200).send(categories)
      })
      .catch(error => {
        console.log(error)
        res.status(400).send(error)
      })
  },
  retreive (req, res) {
    return category
      .findById(req.params.categoryId, {
        include: [{
          model: coin,
          as: 'coins'
        }]
      })
      .then(category => {
        if (!category) {
          return res.status(404).send({
            message: 'Category Not Found'
          })
        }
        res.status(200).send(category)
      })
      .catch(error => {
        console.log(error)
        res.status(400).send(error)
      })
  },
  update (req, res) {
    return category
      .findById(req.params.categoryId)
      .then(category => {
        if (!category) {
          return res.status(404).send({
            message: 'Category Not Found'
          })
        }
        return category
          .update({
            title: req.body.title || category.title,
            description: req.body.description || category.description
          })
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
    return category
      .findById(req.params.categoryId)
      .then(category => {
        if (!category) {
          return res.status(404).send({
            message: 'Category Not Found'
          })
        }
        return category
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
