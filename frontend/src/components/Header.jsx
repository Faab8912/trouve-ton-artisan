import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import '../styles/Header.scss';

export default function Header() {
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await api.get('/categories');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      window.location.href = `/artisans?nom=${searchTerm}`;
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            Trouve ton artisan
          </Link>
          
          <nav className="navbar">
            <Link to="/">Accueil</Link>
            {categories.map(cat => (
              <Link key={cat.id} to={`/artisans?categorie=${cat.nom}`}>
                {cat.nom}
              </Link>
            ))}
          </nav>

          <form className="search-bar" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Rechercher un artisan..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">Chercher</button>
          </form>
        </div>
      </div>
    </header>
  );
}
