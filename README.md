# Movie Explorer - fin de séance 1

Ce projet constitue le point de départ propre de la séance **State management & asynchrone**.

Il contient déjà la séance React Router complète :
- BrowserRouter
- Routes / Route
- Link / NavLink
- `/movies/:id`
- useParams()
- useNavigate()
- 404
- pages séparées

## Point de départ de la séance suivante
Dans `src/pages/Movies.tsx`, les données sont encore locales :

```ts
import { movies } from "../data/movies";
```

C'est volontaire : cette ligne sera remplacée progressivement par un chargement asynchrone depuis une API.

## Lancer
1. `npm install`
2. `npm run dev`
3. ouvrir l'adresse affichée par Vite (généralement http://localhost:5173)
