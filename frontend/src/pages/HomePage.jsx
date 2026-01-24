import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ArtisanCard from '../components/ArtisanCard';
import SearchBar from '../components/SearchBar';
import api from '../services/api';
import '../styles/HomePage.scss';

export default function HomePage() {
  const [topArtisans, setTopArtisans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTopArtisans();
  }, []);

  const fetchTopArtisans = async () => {
    try {
      const response = await api.get('/artisans/top');
      setTopArtisans(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching top artisans:', error);
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      
      <main className="home-page">
        <section className="hero">
          <div className="hero-content">
            <h1>Trouve ton artisan!</h1>
            <p>Avec la region Auvergne-Rhone-Alpes</p>
          </div>
        </section>

        <section className="search-section container">
          <SearchBar />
        </section>

        <section className="how-to-find container">
          <h2>Comment trouver mon artisan?</h2>
          
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Choisir la categorie d'artisan dans le menu</h3>
              <p>Selectionnez la categorie qui correspond a votre besoin</p>
            </div>

            <div className="step">
              <div className="step-number">2</div>
              <h3>Choisir un artisan</h3>
              <p>Parcourez la liste des artisans de la categorie selectionnee</p>
            </div>

            <div className="step">
              <div className="step-number">3</div>
              <h3>Le contacter via le formulaire de contact</h3>
              <p>Utilisez le formulaire pour demander des prestations ou des tarifs</p>
            </div>

            <div className="step">
              <div className="step-number">4</div>
              <h3>Une reponse sera apportee sous 48h</h3>
              <p>L'artisan vous repondra dans les 48 heures ouvrables</p>
            </div>
          </div>
        </section>

        <section className="featured-artisans container">
          <h2>Les trois artisans du mois</h2>
          
          {loading ? (
            <p>Chargement...</p>
          ) : (
            <div className="artisans-grid">
              {topArtisans.map(artisan => (
                <ArtisanCard key={artisan.id} artisan={artisan} />
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}
