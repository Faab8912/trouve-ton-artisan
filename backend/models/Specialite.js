const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Categorie = require("./Categorie");

const Specialite = sequelize.define(
  "Specialite",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nom: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    categorie_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Categorie,
        key: "id",
      },
    },
  },
  {
    tableName: "specialite",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: false,
  }
);

// Specialite.belongsTo(Categorie, { foreignKey: 'categorie_id' });
// Categorie.hasMany(Specialite, { foreignKey: 'categorie_id' });

module.exports = Specialite;
