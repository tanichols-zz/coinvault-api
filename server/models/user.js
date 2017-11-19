module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    email: {
      type: DataTypes.TEXT
    },
    isAdmin: {
      type: DataTypes.INTEGER
    }
  })

  return user
}
