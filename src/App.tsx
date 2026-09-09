import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home"; import Movies from "./pages/Movies"; import MovieDetails from "./pages/MovieDetails"; import Favorites from "./pages/Favorites"; import About from "./pages/About"; import NotFound from "./pages/NotFound";
export default function App(){return <div className="app-shell"><Header/><main className="content"><Routes><Route path="/" element={<Home/>}/><Route path="/movies" element={<Movies/>}/><Route path="/movies/:id" element={<MovieDetails/>}/><Route path="/favorites" element={<Favorites/>}/><Route path="/about" element={<About/>}/><Route path="*" element={<NotFound/>}/></Routes></main></div>}
