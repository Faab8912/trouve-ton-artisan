const Avis = require('../models/Avis');
const Artisan = require('../models/Artisan');

exports.getAvisByArtisan = async (req, res) => {
  try {
    const avis = await Avis.findAll({
      where: { artisan_id: req.params.artisanId },
      order: [['created_at', 'DESC']]
    });
    
    res.json(avis);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createAvis = async (req, res) => {
  try {
    const { artisan_id, nom_client, email_client, note, commentaire } = req.body;
    
    if (!artisan_id || !note || note < 1 || note > 5) {
      return res.status(400).json({ error: 'Invalid data' });
    }
    
    const avis = await Avis.create({
      artisan_id,
      nom_client,
      email_client,
      note,
      commentaire
    });
    
    const artisan = await Artisan.findByPk(artisan_id);
    const allAvis = await Avis.findAll({ where: { artisan_id } });
    const averageNote = allAvis.reduce((sum, a) => sum + a.note, 0) / allAvis.length;
    
    await artisan.update({
      note: averageNote,
      nombre_avis: allAvis.length
    });
    
    res.status(201).json(avis);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
