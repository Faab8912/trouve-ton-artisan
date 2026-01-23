CREATE DATABASE IF NOT EXISTS trouve_ton_artisan DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE trouve_ton_artisan;

CREATE TABLE categorie (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nom VARCHAR(100) NOT NULL UNIQUE,
  description TEXT,
  icone VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE specialite (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nom VARCHAR(100) NOT NULL,
  categorie_id INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (categorie_id) REFERENCES categorie(id) ON DELETE CASCADE,
  UNIQUE KEY unique_specialite_categorie (nom, categorie_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE artisan (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nom VARCHAR(150) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  telephone VARCHAR(20),
  site_web VARCHAR(255),
  adresse TEXT NOT NULL,
  ville VARCHAR(100) NOT NULL,
  code_postal VARCHAR(5) NOT NULL,
  photo VARCHAR(255),
  note FLOAT DEFAULT 0,
  nombre_avis INT DEFAULT 0,
  description TEXT,
  specialite_id INT NOT NULL,
  est_top BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (specialite_id) REFERENCES specialite(id) ON DELETE CASCADE,
  INDEX idx_specialite (specialite_id),
  INDEX idx_nom (nom),
  INDEX idx_est_top (est_top)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE avis (
  id INT PRIMARY KEY AUTO_INCREMENT,
  artisan_id INT NOT NULL,
  email_client VARCHAR(100),
  nom_client VARCHAR(100),
  note INT NOT NULL CHECK (note >= 1 AND note <= 5),
  commentaire TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (artisan_id) REFERENCES artisan(id) ON DELETE CASCADE,
  INDEX idx_artisan (artisan_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE contact (
  id INT PRIMARY KEY AUTO_INCREMENT,
  artisan_id INT NOT NULL,
  nom VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  telephone VARCHAR(20),
  objet VARCHAR(200),
  message TEXT NOT NULL,
  statut ENUM('nouveau', 'lu', 'repondu') DEFAULT 'nouveau',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (artisan_id) REFERENCES artisan(id) ON DELETE CASCADE,
  INDEX idx_artisan (artisan_id),
  INDEX idx_statut (statut)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
