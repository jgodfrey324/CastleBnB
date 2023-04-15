'use strict';
const {
  Model,
  Validator
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Spot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Spot.belongsTo(models.User, {
        foreignKey: 'ownerId'
      });
    }
  }
  Spot.init({
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [5, 100]
      }
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 50],
        isAlpha: true,
        isCapitalized(value) {
          let flag = false;

          const flagCheck = function(value) {
            value.split(' ').forEach(part => {
              if (part.toLowerCase() ===  part) flag = true});
          }

          if (flagCheck(value)) {
            throw new Error('City must be capitalized.')
          }
        }
      }
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 50],
        isAlpha: true,
        isCapitalized(value) {
          let flag = false;

          const flagCheck = function(value) {
            value.split(' ').forEach(part => {
              if (part.toLowerCase() ===  part) flag = true});
          }

          if (flagCheck(value)) {
            throw new Error('City must be capitalized.')
          }
        }
      }
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 50],
        isAlpha: true,
        isCapitalized(value) {
          let flag = false;

          const flagCheck = function(value) {
            value.split(' ').forEach(part => {
              if (part.length > 3 && part.toLowerCase() ===  part) flag = true});
          }

          if (flagCheck(value)) {
            throw new Error('City must be capitalized.')
          }
        }
      }
    },
    lat: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isNumeric: true
      }
    },
    lng: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isNumeric: true
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 80]
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 350]
      }
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isNumeric: true
      }
    }
  }, {
    sequelize,
    modelName: 'Spot',
    indexes: [
      {
        fields: [['name', 'ownerId'], ['lat', 'lng']],
        unique: true
      }
    ]
  });
  return Spot;
};
