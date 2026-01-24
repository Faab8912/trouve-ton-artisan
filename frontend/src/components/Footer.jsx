import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Contact</h4>
            <p>101 cours Charlemagne</p>
            <p>CS 20033</p>
            <p>69269 LYON CEDEX 02</p>
            <p>France</p>
            <p>Telephone: +33 (0)4 26 73 40 00</p>
          </div>

          <div className="footer-section">
            <h4>Pages Legales</h4>
            <Link to="/mentions-legales">Mentions legales</Link>
            <Link to="/donnees-personnelles">Donnees personnelles</Link>
            <Link to="/accessibilite">Accessibilite</Link>
            <Link to="/cookies">Cookies</Link>
          </div>

          <div className="footer-section">
            <h4>A propos</h4>
            <p>Plateforme de recherche d'artisans dans la region Auvergne-Rhone-Alpes.</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Trouve ton artisan. Tous droits reserves.</p>
        </div>
      </div>
    </footer>
  );
}
