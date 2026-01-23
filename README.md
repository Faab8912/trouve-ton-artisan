# Trouve ton artisan

## Description

Plateforme web permettant aux particuliers de trouver rapidement un artisan dans la région Auvergne-Rhône-Alpes et de lui demander des prestations ou des tarifs via un formulaire de contact.

## Fonctionnalités principales

- Recherche d'artisans par catégorie (Alimentation, Bâtiment, Services, Fabrication)
- Recherche d'artisans par nom
- Affichage des 3 artisans du mois en vedette
- Fiche détaillée pour chaque artisan avec:
  - Photo/logo
  - Spécialité et localisation
  - Notes et avis des clients
  - Formulaire de contact
  - Lien vers le site web de l'artisan
- Page 404 personnalisée
- Design responsive (mobile first)
- Accessibilité WCAG 2.1

## Stack technologique

### Frontend
- React 18
- Bootstrap 5
- Sass
- Axios

### Backend
- Node.js
- Express
- MySQL
- Sequelize (ORM)

### Outils
- Git et GitHub (versionning)
- Figma (maquettes)
- Visual Studio Code (IDE)

## Structure du projet

trouve-ton-artisan/
├── frontend/ - Application React
│   ├── public/
│   ├── src/
│   │   ├── components/ - Composants réutilisables
│   │   ├── pages/ - Pages complètes
│   │   ├── services/ - Appels API
│   │   ├── styles/ - Fichiers Sass
│   │   ├── App.jsx
│   │   └── index.js
│   ├── package.json
│   └── .env
├── backend/ - API Express
│   ├── config/ - Configuration
│   ├── models/ - Modèles Sequelize
│   ├── controllers/ - Logique métier
│   ├── routes/ - Endpoints API
│   ├── middleware/ - Authentification, validation
│   ├── database/ - Scripts SQL
│   ├── server.js
│   ├── package.json
│   └── .env
├── docs/ - Documentation
│   ├── API.md
│   ├── SECURITE.md
│   ├── MCD_MLD.md
│   └── INSTALL.md
└── README.md

## Installation

### Prérequis
- Node.js (v14+)
- MySQL (v5.7+)
- npm ou yarn
- Git

### Étapes

1. Cloner le repository

git clone https://github.com/Faab8912/trouve-ton-artisan.git
cd trouve-ton-artisan

2. Configuration de la base de données

mysql -u root -p < backend/database/create.sql
mysql -u root -p < backend/database/seed.sql

3. Installation du backend

cd backend
npm install

Créer un fichier `.env`:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=votre_mot_de_passe
DB_NAME=trouve_ton_artisan
PORT=5000

Démarrer:

npm start

4. Installation du frontend

cd ../frontend
npm install

Créer un fichier `.env`:

REACT_APP_API_URL=http://localhost:5000/api

Démarrer:

npm start

Accès: http://localhost:3000

## Base de données

### Tables principales
- `categorie`: Catégories d'artisans
- `specialite`: Spécialités par catégorie
- `artisan`: Informations des artisans
- `avis`: Avis et notes des clients
- `contact`: Messages de contact

Voir `docs/MCD_MLD.md` pour le schéma détaillé.

## API REST

### Endpoints principaux

GET  /api/artisans                          - Tous les artisans
GET  /api/artisans/:id                      - Un artisan
GET  /api/artisans?categorie=Alimentation   - Filtrer par catégorie
GET  /api/artisans?nom=jean                 - Rechercher par nom
GET  /api/artisans?top=true                 - Artisans en vedette
GET  /api/categories                        - Toutes les catégories
POST /api/contact                           - Envoyer un message
POST /api/avis                              - Laisser un avis

Voir `docs/API.md` pour la documentation complète.

## Sécurité

- Validation stricte des données côté serveur
- Protection contre les injections SQL (Sequelize ORM)
- Protection XSS (React échappe automatiquement)
- CORS configuré
- Rate limiting
- Gestion complète des erreurs

Voir `docs/SECURITE.md` pour plus de détails.

## Responsivité

Design adapté à:
- Téléphones (320px+)
- Tablettes (768px+)
- Ordinateurs (1024px+)

## Accessibilité

Respect de la norme WCAG 2.1

## Déploiement

- Frontend: Netlify ou Vercel
- Backend: Heroku ou Railway
- Base de données: Services cloud MySQL

Voir `docs/INSTALL.md` pour les étapes détaillées.
