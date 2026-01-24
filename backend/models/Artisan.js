const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Specialite = require("./Specialite");

const Artisan = sequelize.define(
  "Artisan",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nom: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    telephone: {
      type: DataTypes.STRING(20),
    },
    site_web: {
      type: DataTypes.STRING(255),
    },
    adresse: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    ville: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    code_postal: {
      type: DataTypes.STRING(5),
      allowNull: false,
    },
    photo: {
      type: DataTypes.STRING(255),
    },
    note: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    nombre_avis: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    description: {
      type: DataTypes.TEXT,
    },
    specialite_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Specialite,
        key: "id",
      },
    },
    est_top: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    tableName: "artisan",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: false,
  }
);

// Artisan.belongsTo(Specialite, { foreignKey: 'specialite_id' });
// Specialite.hasMany(Artisan, { foreignKey: 'specialite_id' });

module.exports = Artisan;
