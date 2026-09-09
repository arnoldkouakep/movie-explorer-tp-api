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

  useEffect(() => {
    async function loadShows() {
      const response = await fetch(API_URL);
      const data = (await response.json()) as ApiShow[];
      setShows(data);
      setLoading(false);
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
      {loading ? (
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