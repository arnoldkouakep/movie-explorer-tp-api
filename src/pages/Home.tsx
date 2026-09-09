import { Link } from "react-router-dom";
export default function Home(){return <section className="hero"><p className="eyebrow">Projet Movie Explorer</p><h2>Découvrez notre sélection de films</h2><p>Cette version reprend la séance 1 complète : pages, navigation, route dynamique et page 404.</p><Link className="primary-button" to="/movies">Voir les films</Link></section>}
