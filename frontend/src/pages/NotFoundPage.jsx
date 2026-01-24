import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/NotFoundPage.scss';

export default function NotFoundPage() {
  return (
    <>
      <Header />
      
      <main className="not-found-page">
        <div className="container">
          <div className="error-content">
            <h1>404</h1>
            <h2>Page non trouvee</h2>
            <p>La page que vous avez demandee n'existe pas ou a ete deplacee.</p>
            <Link to="/" className="btn-home">Retour a l'accueil</Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
