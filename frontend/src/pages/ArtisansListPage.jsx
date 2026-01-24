import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ArtisanCard from '../components/ArtisanCard';
import api from '../services/api';
import '../styles/ArtisansListPage.scss';

export default function ArtisansListPage() {
  const [searchParams] = useSearchParams();
  const [artisans, setArtisans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const categorie = searchParams.get('categorie');
  const nom = searchParams.get('nom');

  useEffect(() => {
    fetchArtisans();
  }, [categorie, nom]);

  const fetchArtisans = async () => {
    setLoading(true);
    try {
      let url = '/artisans';
      const params = new URLSearchParams();
      
      if (categorie) params.append('categorie', categorie);
      if (nom) params.append('nom', nom);
      
      if (params.toString()) {
        url += '?' + params.toString();
      }
      
      const response = await api.get(url);
      setArtisans(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching artisans:', error);
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      
      <main className="artisans-list-page">
        <div className="container">
          <h1>
            {categorie ? `Artisans - ${categorie}` : 'Tous les artisans'}
          </h1>

          <div className="search-filter">
            <input
              type="text"
              placeholder="Rechercher par nom..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={() => {
              if (searchTerm.trim()) {
                window.location.href = `/artisans?nom=${searchTerm}`;
              }
            }}>
              Chercher
            </button>
          </div>

          {loading ? (
            <p>Chargement...</p>
          ) : artisans.length > 0 ? (
            <div className="artisans-grid">
              {artisans.map(artisan => (
                <ArtisanCard key={artisan.id} artisan={artisan} />
              ))}
            </div>
          ) : (
            <p className="no-results">Aucun artisan trouve</p>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
