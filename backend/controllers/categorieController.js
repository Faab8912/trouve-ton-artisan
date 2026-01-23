const Categorie = require('../models/Categorie');
const Specialite = require('../models/Specialite');

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Categorie.findAll({
      include: [{ model: Specialite }],
      order: [['nom', 'ASC']]
    });
    
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCategorieById = async (req, res) => {
  try {
    const categorie = await Categorie.findByPk(req.params.id, {
      include: [{ model: Specialite }]
    });
    
    if (!categorie) {
      return res.status(404).json({ error: 'Categorie not found' });
    }
    
    res.json(categorie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
