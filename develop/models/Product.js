// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model { }

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGERS,
      primaryKey: true,
      allownull: false,
      autoincrement: true
    },

    product_id: {
      type: DataTypes.INTEGERS,
      references: {
        model: 'product',
        key: 'id'
      }
    },
    
    tag_id:{
      tupe: DataTypes.INTEGERS,
      references: {
        model: 'tag',
        key: 'id'
      }
    }
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;