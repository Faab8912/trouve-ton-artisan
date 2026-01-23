const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Artisan = require('./Artisan');

const Avis = sequelize.define('Avis', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  artisan_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Artisan,
      key: 'id'
    }
  },
  email_client: {
    type: DataTypes.STRING(100)
  },
  nom_client: {
    type: DataTypes.STRING(100)
  },
  note: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5
    }
  },
  commentaire: {
    type: DataTypes.TEXT
  }
}, {
  tableName: 'avis',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: false
});

Avis.belongsTo(Artisan, { foreignKey: 'artisan_id' });
Artisan.hasMany(Avis, { foreignKey: 'artisan_id' });

module.exports = Avis;
