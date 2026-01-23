const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Categorie = sequelize.define('Categorie', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nom: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true
  },
  description: {
    type: DataTypes.TEXT
  },
  icone: {
    type: DataTypes.STRING(255)
  }
}, {
  tableName: 'categorie',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: false
});

module.exports = Categorie;
