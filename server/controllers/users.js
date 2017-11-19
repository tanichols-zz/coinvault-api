const user = require('../models').user

module.exports = {
  create (req, res) {
    return user
      .create({
        email: req.body.email
      })
      .then(user => {
        res.status(201).send(user)
      })
      .catch(error => {
        console.log(error)
        res.status(400).send(error)
      })
  },
  list (req, res) {
    return user
      .all()
      .then(users => {
        res.status(200).send(users)
      })
      .catch(error => {
        console.log(error)
        res.status(400).send(error)
      })
  },
  retreive (req, res) {
    return user
      .findById(req.params.userId)
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'User Not Found'
          })
        }
        res.status(200).send(user)
      })
      .catch(error => {
        console.log(error)
        res.status(400).send(error)
      })
  },
  update (req, res) {
    return user
      .findById(req.params.userId)
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'User Not Found'
          })
        }
        return user
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
    return user
      .findById(req.params.userId)
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'User Not Found'
          })
        }
        return user
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
