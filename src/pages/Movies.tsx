import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import type { ApiShow } from "../types/ApiShow";
import type { Movie } from "../types/Movie";

const API_URL = "https://api.tvmaze.com/shows";
const LIMIT = 12;

function toMovie(show: ApiShow): Movie {
  return {
    id: show.id,
    title: show.name,
    year: show.premiered ? Number(show.premiered.slice(0, 4)) : NaN,
    genre: show.genres[0] ?? "Inconnu",
    description: show.summary
      ? show.summary.replace(/<[^>]*>/g, " ").trim().slice(0, 200)
      : "Aucune description.",
  };
}

export default function Movies() {
  const [shows, setShows] = useState<ApiShow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadShows() {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`Réponse HTTP indisponible (${response.status}).`);
        }
        const data = (await response.json()) as ApiShow[];
        setShows(data);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Une erreur inconnue est survenue.",
        );
      } finally {
        setLoading(false);
      }
    }
    loadShows();
  }, []);

  const catalogue = shows.slice(0, LIMIT);

  return (
    <section>
      <div className="section-heading">
        <div>
          <p className="eyebrow">Catalogue</p>
          <h2>Toutes les séries</h2>
        </div>
        <p>{loading ? "Chargement en cours…" : `${catalogue.length} séries affichées`}</p>
      </div>
      {error ? (
        <section className="panel">
          <p className="eyebrow">Erreur</p>
          <h3>Impossible de charger le catalogue</h3>
          <p>{error}</p>
          <p>Vérifie ta connexion réseau puis recharge la page.</p>
        </section>
      ) : loading ? (
        <p className="panel">Chargement du catalogue en cours…</p>
      ) : (
        <div className="movie-grid">
          {catalogue.map((show) => (
            <MovieCard key={show.id} movie={toMovie(show)} />
          ))}
        </div>
      )}
    </section>
  );
}