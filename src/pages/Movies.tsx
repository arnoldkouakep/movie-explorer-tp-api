import MovieCard from "../components/MovieCard";
import { movies } from "../data/movies";
export default function Movies(){return <section><div className="section-heading"><div><p className="eyebrow">Catalogue</p><h2>Films</h2></div><p>{movies.length} films disponibles</p></div><div className="movie-grid">{movies.map(movie=><MovieCard key={movie.id} movie={movie}/>)}</div></section>}
