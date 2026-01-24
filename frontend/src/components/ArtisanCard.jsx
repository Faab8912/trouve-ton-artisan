import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ArtisanCard.scss';

export default function ArtisanCard({ artisan }) {
  return (
    <div className="artisan-card">
      <div className="card-image">
        <img src={artisan.photo || '/placeholder.jpg'} alt={artisan.nom} />
      </div>
      
      <div className="card-content">
        <h3>{artisan.nom}</h3>
        
        <p className="specialite">
          {artisan.Specialite?.nom}
        </p>
        
        <div className="card-rating">
          <span className="stars">
            {'★'.repeat(Math.round(artisan.note))}{'☆'.repeat(5 - Math.round(artisan.note))}
          </span>
          <span className="note">{artisan.note.toFixed(1)}/5</span>
        </div>

        <p className="localisation">
          {artisan.ville}, {artisan.code_postal}
        </p>

        <Link to={`/artisans/${artisan.id}`} className="btn-voir-profil">
          Voir profil
        </Link>
      </div>
    </div>
  );
}
