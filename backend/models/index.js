const Categorie = require("./Categorie");
const Specialite = require("./Specialite");
const Artisan = require("./Artisan");
const Avis = require("./Avis");
const Contact = require("./Contact");

Specialite.belongsTo(Categorie, { foreignKey: "categorie_id" });
Categorie.hasMany(Specialite, { foreignKey: "categorie_id" });

Artisan.belongsTo(Specialite, { foreignKey: "specialite_id" });
Specialite.hasMany(Artisan, { foreignKey: "specialite_id" });

Avis.belongsTo(Artisan, { foreignKey: "artisan_id" });
Artisan.hasMany(Avis, { foreignKey: "artisan_id" });

Contact.belongsTo(Artisan, { foreignKey: "artisan_id" });
Artisan.hasMany(Contact, { foreignKey: "artisan_id" });

module.exports = {
  Categorie,
  Specialite,
  Artisan,
  Avis,
  Contact,
};
