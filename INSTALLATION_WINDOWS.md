# Installation - Windows

## Prérequis
- Node.js 20 ou 22 recommandé
- npm
- VS Code conseillé

Dans PowerShell ou l'invite de commandes :
```powershell
node -v
npm -v
```

## Démarrage
1. Décompresser le ZIP (ne travaillez pas directement dans l'archive).
2. Ouvrir le dossier dans VS Code.
3. Ouvrir un terminal dans le dossier du projet.
4. Exécuter :
```powershell
npm install
npm run dev
```
5. Ouvrir l'adresse indiquée par Vite, généralement `http://localhost:5173`.

## Vérification
Tester : `/`, `/movies`, `/movies/1`, `/favorites`, `/about` et une URL inconnue.

## Important pour la séance suivante
Ne remplacez pas encore les données locales. `src/pages/Movies.tsx` doit contenir :
```ts
import { movies } from "../data/movies";
```
