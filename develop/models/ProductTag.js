const { Model, DataTypes } = require('sequelize');
const { Product } = require('.');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
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
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;