import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SearchBar.scss';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/artisans?nom=${searchTerm}`);
    }
  };

  return (
    <form className="search-bar-main" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Entrez le nom d'un artisan..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">Rechercher</button>
    </form>
  );
}
