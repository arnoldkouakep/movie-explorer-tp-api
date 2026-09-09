import { Link } from "react-router-dom";
import type { Movie } from "../types/Movie";
export default function MovieCard({movie}:{movie:Movie}){return <article className="movie-card"><div className="poster">{movie.title.slice(0,1)}</div><div><p className="eyebrow">{movie.genre}</p><h3>{movie.title}</h3><p>{movie.year}</p><Link className="primary-button" to={`/movies/${movie.id}`}>Voir le détail</Link></div></article>}
