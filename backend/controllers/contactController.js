const Contact = require('../models/Contact');

exports.createContact = async (req, res) => {
  try {
    const { artisan_id, nom, email, telephone, objet, message } = req.body;
    
    if (!artisan_id || !nom || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    const contact = await Contact.create({
      artisan_id,
      nom,
      email,
      telephone,
      objet,
      message,
      statut: 'nouveau'
    });
    
    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getContactsByArtisan = async (req, res) => {
  try {
    const contacts = await Contact.findAll({
      where: { artisan_id: req.params.artisanId },
      order: [['created_at', 'DESC']]
    });
    
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
