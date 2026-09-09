import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { ApiShow } from "../types/ApiShow";

function cleanSummary(summary: string | null): string {
  if (!summary) return "Aucune description.";
  return summary.replace(/<[^>]*>/g, " ").trim();
}

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [show, setShow] = useState<ApiShow | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadDetail() {
      setLoading(true);
      setError(null);
      setShow(null);
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        if (!response.ok) {
          throw new Error(`Réponse HTTP indisponible (${response.status}).`);
        }
        const data = (await response.json()) as ApiShow;
        setShow(data);
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
    loadDetail();
  }, [id]);

  if (loading) {
    return (
      <section className="panel">
        <p className="eyebrow">Chargement</p>
        <h2>Détail de la série…</h2>
      </section>
    );
  }

  if (error || !show) {
    return (
      <section className="panel">
        <p className="eyebrow">Erreur</p>
        <h2>Série introuvable</h2>
        <p>{error ?? `Aucune série ne correspond à l'identifiant ${id}.`}</p>
        <Link className="primary-button" to="/movies">
          Retour au catalogue
        </Link>
      </section>
    );
  }

  return (
    <section className="panel">
      {show.image?.medium && (
        <img
          src={show.image.medium}
          alt={`Affiche de ${show.name}`}
          style={{ borderRadius: 12, maxWidth: 220, marginBottom: 16 }}
        />
      )}
      <p className="eyebrow">{show.genres.join(" · ") || "Genres inconnus"}</p>
      <h2>{show.name}</h2>
      <p><strong>Première diffusion :</strong> {show.premiered ?? "Date inconnue"}</p>
      <p>{cleanSummary(show.summary)}</p>
      <button className="secondary-button" onClick={() => navigate("/movies")}>
        ← Retour aux films
      </button>
    </section>
  );
}