# Trouve ton artisan

Plateforme de recherche d'artisans dans la région Auvergne-Rhône-Alpes. Découvrez et contactez les meilleurs professionnels près de chez vous.

---

## Table des matières

- [Description](#description)
- [Fonctionnalités](#fonctionnalités)
- [Stack Technologique](#stack-technologique)
- [Installation](#installation)
- [Structure du Projet](#structure-du-projet)
- [Configuration](#configuration)
- [Base de Données](#base-de-données)
- [Déploiement](#déploiement)

---

## Description

**Trouve ton artisan** est une application web développée pour faciliter la recherche d'artisans professionnels dans la région Auvergne-Rhône-Alpes. Le projet comprend :

- Une API REST complète avec Express.js
- Une interface utilisateur moderne en React
- Une base de données MySQL pour gérer les artisans
- Une documentation Figma des maquettes (3 pages)
- Un plan de sécurité complet

### Objectifs du Projet

- Permettre aux utilisateurs de rechercher des artisans par catégorie
- Consulter les profils détaillés des artisans
- Contacter directement les artisans via un formulaire
- Consulter les avis et évaluations

---

## Fonctionnalités

### Page d'Accueil

- Présentation générale de la plateforme
- Section "Comment trouver mon artisan?" (4 étapes)
- Affichage des 3 artisans du mois
- Navigation par catégories

### Liste des Artisans

- Filtrage par catégorie (Alimentation, Bâtiment, Fabrication, Services)
- Recherche par nom
- Affichage en grille (3 colonnes)
- Évaluation et avis visibles

### Fiche Artisan

- Informations complètes de l'artisan
- Section "À propos"
- Avis clients
- Formulaire de contact pour envoyer un message
- Lien vers le site web de l'artisan

### Sécurité

- Protection contre les injections SQL (prepared statements)
- Sanitization des entrées utilisateur
- Configuration CORS sécurisée
- Gestion des erreurs sans divulgation d'infos sensibles

---

## Stack Technologique

### Frontend

- React 18 - Framework JavaScript
- React Router - Navigation
- SCSS - Styles (variables, mixins, architecture modulaire)
- Axios - Appels API

### Backend

- Node.js - Runtime JavaScript
- Express.js - Framework web
- MySQL 2 - Base de données avec prepared statements

### Outils

- npm - Gestionnaire de paquets
- Figma - Design et maquettes
- GitHub - Contrôle de version

---

## Installation

### Prérequis

- Node.js (v16+)
- npm (v8+)
- MySQL 8.0+

### 1. Cloner le Repository

Cloner le repository depuis GitHub et naviguer dans le dossier du projet.

### 2. Installation du Backend

Naviguer dans le dossier backend et installer les dépendances avec npm.

Créer un fichier `.env` avec les informations de connexion MySQL :

- DB_HOST=localhost
- DB_USER=root
- DB_PASSWORD=votre_mot_de_passe
- DB_NAME=trouve_ton_artisan
- DB_PORT=3306
- PORT=5001

Importer la base de données en utilisant le script database.sql.

Lancer le serveur. Le backend s'exécutera sur http://localhost:5001

### 3. Installation du Frontend

Naviguer dans le dossier frontend et installer les dépendances avec npm.

Lancer l'application React. L'application s'ouvrira sur http://localhost:3000

---

## Structure du Projet

```
trouve-ton-artisan/
├── backend/
│   ├── controllers/          # Contrôleurs API
│   ├── routes/              # Routes Express
│   ├── config/              # Configuration (base de données)
│   ├── database.sql         # Script création BD
│   ├── seed.sql             # Script alimentation BD
│   ├── server.js            # Point d'entrée
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/      # Composants React
│   │   ├── pages/           # Pages (Accueil, Artisans, Détail)
│   │   ├── styles/          # Feuilles SCSS
│   │   ├── App.jsx          # Composant principal
│   │   └── index.js         # Point d'entrée
│   └── package.json
│
├── docs/
│   ├── MCD_MLD.docx         # Schéma base de données
│   ├── Plan_Securite.docx   # Plan de sécurité
│   └── Figma_Mockups/       # Captures des maquettes
│
└── README.md                # Ce fichier
```

---

## Configuration

### Variables d'Environnement (Backend)

| Variable      | Description        | Exemple              |
| ------------- | ------------------ | -------------------- |
| `DB_HOST`     | Hôte MySQL         | `localhost`          |
| `DB_USER`     | Utilisateur MySQL  | `root`               |
| `DB_PASSWORD` | Mot de passe MySQL | `password`           |
| `DB_NAME`     | Nom de la base     | `trouve_ton_artisan` |
| `DB_PORT`     | Port MySQL         | `3306`               |
| `PORT`        | Port du serveur    | `5001`               |

### CORS Configuration

Le backend accepte les requêtes de http://localhost:3000 uniquement en développement.

Pour la production, modifier le fichier backend/server.js en configurant l'URL de production dans corsOptions.

---

## Base de Données

### Tables Principales

#### CATEGORIE

- Catégories d'artisans (Alimentation, Bâtiment, etc.)

#### SPECIALITE

- Spécialités spécifiques liées aux catégories

#### ARTISAN

- Informations des artisans
- Nom, email, téléphone, adresse, note, évaluation

#### AVIS

- Avis clients sur les artisans
- Note, commentaire

#### CONTACT

- Messages de contact envoyés via le formulaire

### Importer les Données

Utiliser le script database.sql pour créer les tables et le script seed.sql pour alimenter la base de données avec les données initiales.

---

## Déploiement

### Frontend (Netlify recommandé)

1. Générer le build React avec npm run build
2. Déployer le dossier build/ sur Netlify

### Backend (Heroku, Railway, ou autre)

1. Préparer le serveur de production
2. Configurer les variables d'environnement
3. Déployer le code avec Git

---

## Sécurité

- Injection SQL : Requêtes préparées
- XSS : Sanitization des entrées
- CORS : Configuration stricte
- Erreurs : Messages génériques
- Environnement : Variables sensibles en .env

Voir Plan_Securite.docx pour plus de détails.

---

## API Endpoints

### GET

- GET /api/artisans - Tous les artisans
- GET /api/artisans/:id - Détail d'un artisan
- GET /api/artisans?categorie=1 - Artisans par catégorie
- GET /api/categories - Toutes les catégories
- GET /api/specialites - Toutes les spécialités

### POST

- POST /api/contact - Envoyer un message de contact
- POST /api/avis - Poster un avis

---

## Maquettes Figma

3 pages complètes ont été mockupées en Figma :

1. Page d'Accueil - Présentation générale
2. Page Liste Artisans - Grille de cartes
3. Page Détail Artisan - Profil complet + formulaire

Voir docs/Figma_Mockups/ pour les captures d'écran.
