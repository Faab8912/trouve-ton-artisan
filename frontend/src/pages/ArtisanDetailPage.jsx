import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import api from "../services/api";
import "../styles/ArtisanDetailPage.scss";

export default function ArtisanDetailPage() {
  const { id } = useParams();
  const [artisan, setArtisan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    objet: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetchArtisan();
  }, [id]);

  const fetchArtisan = async () => {
    try {
      const response = await api.get(`/artisans/${id}`);
      setArtisan(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching artisan:", error);
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitContact = async (e) => {
    e.preventDefault();

    try {
      await api.post("/contact", {
        artisan_id: id,
        ...formData,
      });
      setSubmitted(true);
      setFormData({
        nom: "",
        email: "",
        telephone: "",
        objet: "",
        message: "",
      });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error("Error submitting contact:", error);
    }
  };

  if (loading) {
    return (
      <>
        <Header />
        <main className="artisan-detail-page">
          <div className="container">
            <p>Chargement...</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (!artisan) {
    return (
      <>
        <Header />
        <main className="artisan-detail-page">
          <div className="container">
            <p>Artisan non trouve</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="artisan-detail-page">
        <div className="container">
          <div className="artisan-header">
            <div className="artisan-info">
              <h1>{artisan.nom}</h1>

              <p className="specialite">{artisan.Specialite?.nom}</p>

              <div className="rating">
                <span className="stars">
                  {"★".repeat(Math.round(artisan.note))}
                  {"☆".repeat(5 - Math.round(artisan.note))}
                </span>
                <span className="note">{artisan.note.toFixed(1)}/5</span>
                <span className="avis">({artisan.nombre_avis} avis)</span>
              </div>

              <p className="localisation">
                {artisan.adresse}, {artisan.code_postal} {artisan.ville}
              </p>

              {artisan.site_web && (
                <a
                  href={artisan.site_web}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-website"
                >
                  Visiter le site
                </a>
              )}
            </div>
          </div>

          <div className="artisan-body">
            <section className="about-section">
              <h2>A propos</h2>
              <p>{artisan.description}</p>
            </section>

            <section className="contact-section">
              <h2>Contacter {artisan.nom}</h2>

              {submitted && (
                <div className="success-message">
                  Votre message a ete envoye avec succes! Une reponse vous sera
                  apportee sous 48h.
                </div>
              )}

              <form onSubmit={handleSubmitContact} className="contact-form">
                <div className="form-group">
                  <label htmlFor="nom">Nom</label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="telephone">Telephone</label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="objet">Objet</label>
                  <input
                    type="text"
                    id="objet"
                    name="objet"
                    value={formData.objet}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-submit">
                  Envoyer
                </button>
              </form>
            </section>

            {artisan.Avis && artisan.Avis.length > 0 && (
              <section className="avis-section">
                <h2>Avis des clients</h2>
                <div className="avis-list">
                  {artisan.Avis.map((avis) => (
                    <div key={avis.id} className="avis-item">
                      <div className="avis-header">
                        <strong>{avis.nom_client}</strong>
                        <span className="avis-note">
                          {"★".repeat(avis.note)}
                          {"☆".repeat(5 - avis.note)}
                        </span>
                      </div>
                      <p>{avis.commentaire}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
