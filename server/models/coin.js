module.exports = (sequelize, DataTypes) => {
  var coin = sequelize.define('coin', {
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    image_link: {
      type: DataTypes.TEXT
    },
    description: {
      type: DataTypes.TEXT
    }
  })

  coin.associate = (models) => {
    coin.belongsTo(models.category, {
      foreignKey: 'category_id',
      onDelete: 'CASCADE',
      allowNull: false
    })
  }

  return coin
}
