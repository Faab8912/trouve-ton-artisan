const Artisan = require("../models/Artisan");
const Specialite = require("../models/Specialite");
const Categorie = require("../models/Categorie");
const Avis = require("../models/Avis");
const { Op } = require("sequelize");

exports.getAllArtisans = async (req, res) => {
  try {
    const { categorie, nom, top } = req.query;

    let where = {};
    if (nom) {
      where.nom = { [Op.like]: `%${nom}%` };
    }
    if (top === "true") {
      where.est_top = true;
    }

    let include = [
      { model: Specialite, include: [Categorie] },
      { model: Avis },
    ];

    if (categorie) {
      include = [
        {
          model: Specialite,
          required: true, // ✅ AJOUTE CA
          include: [
            {
              model: Categorie,
              where: { nom: categorie },
              required: true, // ✅ ET CA
            },
          ],
        },
        { model: Avis },
      ];
    }

    const artisans = await Artisan.findAll({
      where,
      include,
      order: [["note", "DESC"]],
    });

    res.json(artisans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getArtisanById = async (req, res) => {
  try {
    const artisan = await Artisan.findByPk(req.params.id, {
      include: [{ model: Specialite, include: [Categorie] }, { model: Avis }],
    });

    if (!artisan) {
      return res.status(404).json({ error: "Artisan not found" });
    }

    res.json(artisan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTopArtisans = async (req, res) => {
  try {
    const artisans = await Artisan.findAll({
      where: { est_top: true },
      include: [{ model: Specialite, include: [Categorie] }, { model: Avis }],
      limit: 3,
      order: [["note", "DESC"]],
    });

    res.json(artisans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
