module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('category', {
    title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    }
  })

  category.associate = (models) => {
    category.hasMany(models.coin, {
      foreignKey: 'category_id',
      as: 'coins'
    })
  }

  return category
}
