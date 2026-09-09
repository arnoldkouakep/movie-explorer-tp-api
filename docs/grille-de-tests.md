# Étape 08 — Grille de tests (recette)

Chaque ligne correspond à un scénario vérifié. La colonne **Résultat** indique OK / KO :
en cas de KO, la colonne Dernière validation décrit le correctif à prévoir.

| # | Scénario | Attendu | Résultat |
| --- | --- | --- | --- |
| 1 | `npm install` | `node_modules` créés sans erreur | OK |
| 2 | `npm run dev` | serveur Vite démarré (http://localhost:5173) | OK |
| 3 | `/` (accueil) | page d'accueil affichée, lien vers `/movies` | OK |
| 4 | `/movies` | loading affiché, puis grille de **12 séries max** (titre, année, genre, résumé, affiche si présente) | OK |
| 5 | `/movies` hors-ligne | panneau « Impossible de charger le catalogue » avec message d'erreur | OK (testé en coupant le réseau) |
| 6 | `/movies/404` | API renvoie 404 → panneau « Série introuvable » + bouton retour | OK |
| 7 | `/movies/1` | détail « Under the Dome » chargé depuis `GET /shows/1` | OK |
| 8 | Navigation (Favoris, À propos, retour) | routes accessibles | OK |
| 9 | Route inexistante `/xyz` | page 404 | OK |
| 10 | `npm run build` | `tsc --noEmit` + `vite build` sans erreur | OK |

## Notes pédagogiques

- Les images de TVmaze peuvent être lentes : prévoir un état de chargement dès l'affichage des cartes.
- Le test 5 est à **proposer aux étudiants en conditions de TP** (désactiver le réseau) pour
  « voir » le bloc `catch` : c'est l'objectif pédagogique de l'étape 05.
- La grille est volontairement en français : c'est le référentiel de correction attendu en séance.