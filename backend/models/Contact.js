const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Artisan = require('./Artisan');

const Contact = sequelize.define('Contact', {
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
  nom: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  telephone: {
    type: DataTypes.STRING(20)
  },
  objet: {
    type: DataTypes.STRING(200)
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  statut: {
    type: DataTypes.ENUM('nouveau', 'lu', 'repondu'),
    defaultValue: 'nouveau'
  }
}, {
  tableName: 'contact',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: false
});

Contact.belongsTo(Artisan, { foreignKey: 'artisan_id' });
Artisan.hasMany(Contact, { foreignKey: 'artisan_id' });

module.exports = Contact;
