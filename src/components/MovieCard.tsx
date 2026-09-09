import { Link } from "react-router-dom";
import type { ApiShow } from "../types/ApiShow";

function cleanSummary(summary: string | null): string {
  if (!summary) return "Aucune description.";
  return summary.replace(/<[^>]*>/g, " ").trim().slice(0, 150);
}

export default function MovieCard({ show }: { show: ApiShow }) {
  const year = show.premiered ? Number(show.premiered.slice(0, 4)) : null;

  return (
    <article className="movie-card">
      <div className="poster">
        {show.image?.medium ? (
          <img src={show.image.medium} alt={`Affiche de ${show.name}`} />
        ) : (
          show.name.slice(0, 1)
        )}
      </div>
      <div>
        <p className="eyebrow">{show.genres[0] ?? "Genre inconnu"}</p>
        <h3>{show.name}</h3>
        <p>{year ?? "Année inconnue"}</p>
        <p>{cleanSummary(show.summary)}</p>
        <Link className="primary-button" to={`/movies/${show.id}`}>
          Voir le détail
        </Link>
      </div>
    </article>
  );
}