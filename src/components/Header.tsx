import { NavLink } from "react-router-dom";
const navClass = ({isActive}:{isActive:boolean}) => isActive ? "nav-button active" : "nav-button";
export default function Header(){return <header className="site-header"><div><p className="eyebrow">B2 React + TypeScript</p><h1>Movie Explorer</h1></div><nav className="nav"><NavLink to="/" end className={navClass}>Accueil</NavLink><NavLink to="/movies" className={navClass}>Films</NavLink><NavLink to="/favorites" className={navClass}>Favoris</NavLink><NavLink to="/about" className={navClass}>À propos</NavLink></nav></header>}
