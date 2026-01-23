USE trouve_ton_artisan;

INSERT INTO categorie (nom, description) VALUES
('Alimentation', 'Artisans de la gastronomie et de l''alimentation'),
('Batiment', 'Artisans du bâtiment et travaux'),
('Services', 'Artisans proposant des services divers'),
('Fabrication', 'Artisans de la fabrication et de l''artisanat');

INSERT INTO specialite (nom, categorie_id) VALUES
('Boulanger', 1),
('Boucher', 1),
('Chocolatier', 1),
('Patissier', 1),
('Plombier', 2),
('Electricien', 2),
('Maçon', 2),
('Menuisier', 2),
('Chauffagiste', 2),
('Nettoyage', 3),
('Réparation', 3),
('Coiffeur', 3),
('Couturier', 4),
('Ébéniste', 4),
('Ferronnerie', 4);

INSERT INTO artisan (nom, email, telephone, site_web, adresse, ville, code_postal, photo, note, nombre_avis, description, specialite_id, est_top) VALUES
('Au Pain Chaud', 'contact@aupainchaud.fr', '04 72 12 34 56', 'https://aupainchaud.fr', '123 Rue de Lyon', 'Lyon', '69000', '/images/pain-chaud.jpg', 4.8, 45, 'Boulangerie artisanale depuis 1985 proposant pains, viennoiseries et pâtisseries faites maison.', 1, TRUE),
('Boulangerie Paul', 'info@boulangerie-paul.fr', '04 72 23 45 67', 'https://boulangerie-paul.fr', '456 Rue Centrale', 'Villeurbanne', '69100', '/images/boulangerie-paul.jpg', 4.7, 38, 'Boulangerie traditionnelle proposant des pains spécialisés et des pâtisseries fines.', 1, TRUE),
('Boucherie Leclerc', 'contact@boucherie-leclerc.fr', '04 72 34 56 78', 'https://boucherie-leclerc.fr', '789 Avenue Foch', 'Lyon', '69000', '/images/boucherie-leclerc.jpg', 4.6, 32, 'Boucherie charcuterie proposant viandes de qualité et produits locaux.', 2, TRUE),
('Chocolats Delice', 'info@chocolats-delice.fr', '04 72 45 67 89', 'https://chocolats-delice.fr', '321 Rue Saint-Jean', 'Vieux Lyon', '69005', '/images/chocolats-delice.jpg', 4.5, 28, 'Chocolaterie artisanale avec des pralines et chocolats faits à la main.', 3, FALSE),
('Patisserie Gourmand', 'contact@patisserie-gourmand.fr', '04 72 56 78 90', 'https://patisserie-gourmand.fr', '654 Rue Lafayette', 'Lyon', '69003', '/images/patisserie-gourmand.jpg', 4.7, 35, 'Pâtisserie fine proposant gâteaux, tartes et desserts personnalisés.', 4, FALSE),
('Plomberie Martin', 'contact@plomberie-martin.fr', '06 12 34 56 78', 'https://plomberie-martin.fr', '111 Chemin des Prairies', 'Saint-Fons', '69190', '/images/plomberie-martin.jpg', 4.4, 22, 'Plomberie générale et spécialisée. Installation, dépannage, entretien.', 5, FALSE),
('Electricité Dupont', 'info@electricite-dupont.fr', '06 23 45 67 89', 'https://electricite-dupont.fr', '222 Avenue de la République', 'Vénissieux', '69200', '/images/electricite-dupont.jpg', 4.6, 30, 'Services électriques complets pour résidentiel et commercial.', 6, FALSE),
('Entreprise Maçonnerie Bernard', 'contact@maconnerie-bernard.fr', '06 34 56 78 90', 'https://maconnerie-bernard.fr', '333 Route de Grenoble', 'Bron', '69500', '/images/maconnerie-bernard.jpg', 4.5, 25, 'Maçonnerie générale, rénovation et construction. Expertise 25 ans.', 7, FALSE),
('Menuiserie Lacroix', 'info@menuiserie-lacroix.fr', '06 45 67 89 01', 'https://menuiserie-lacroix.fr', '444 Rue de la Paix', 'Lyon', '69001', '/images/menuiserie-lacroix.jpg', 4.7, 33, 'Menuiserie bois et menuiserie aluminium. Mobilier sur mesure.', 8, FALSE),
('Chauffage Thermal', 'contact@chauffage-thermal.fr', '06 56 78 90 12', 'https://chauffage-thermal.fr', '555 Boulevard des Alpes', 'Lyon', '69006', '/images/chauffage-thermal.jpg', 4.4, 20, 'Chauffage, climatisation et énergies renouvelables.', 9, FALSE);

INSERT INTO avis (artisan_id, nom_client, email_client, note, commentaire) VALUES
(1, 'Jean Dupont', 'jean@example.com', 5, 'Excellent pain, très bon service et boulanger sympathique.'),
(1, 'Marie Martin', 'marie@example.com', 4, 'Bon pain mais un peu cher.'),
(2, 'Pierre Bernard', 'pierre@example.com', 5, 'Meilleure boulangerie de Villeurbanne!'),
(3, 'Sophie Durand', 'sophie@example.com', 5, 'Très bonne qualité de viande, recommandé.'),
(4, 'Luc Fournier', 'luc@example.com', 4, 'Chocolats délicieux, un peu chers mais excellent.');
