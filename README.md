# Movie Explorer — TP Consommation d'API

Application React + TypeScript dont le catalogue est chargé depuis l'API publique
[TVmaze](https://www.tvmaze.com/api) (`GET https://api.tvmaze.com/shows` et
`GET /shows/:id`), avec gestion du chargement et des erreurs.

C'est l'évolution du projet Movie Explorer (séance 1 : React Router). Chaque
**étape pratique** du TP est développée sur sa propre branche puis fusionnée et
taguée comme une **version**.

> **Note historique** : le corridor `v03`→`v08` a été reconstruit pour caler
> strictement la syntaxe des étapes 03/04 sur le cours (`async/await` dès le
> premier chargement). Dépôt personnel, sans autre collaborateur ; les versions
> `v01` et `v02` et les branches `etape/01`et `etape/02` sont restées intactes.

## Stack

- React 19 + TypeScript (strict)
- Vite 6
- react-router-dom 6

## Lancer

```bash
npm install
npm run dev        # serveur de dev (http://localhost:5173)
npm run build      # tsc --noEmit + vite build (vérification de type / compilation)
npm run preview    # sert le bâti de production
```

## Déroulé du TP (branches + versions)

| Étape | Branche | Tag | Objectif |
| --- | --- | --- | --- |
| 01 | `etape/01-observer-l-api` | `v01_Observer_l_API` | Observer la réponse JSON (`docs/api-analyse.md`) |
| 02 | `etape/02-typer-les-donnees` | `v02_Typer_les_donnees` | Typer la réponse : `ApiShow` |
| 03 | `etape/03-charger-le-catalogue` | `v03_Charger_le_catalogue` | Premier chargement **`async/await`** (comme au cours) |
| 04 | `etape/04-afficher-le-loading` | `v04_Afficher_le_loading` | État de chargement (`setLoading(!)` après `setShows`) |
| 05 | `etape/05-gerer-les-erreurs` | `v05_Gerer_les_erreurs` | `response.ok`, `try/catch/finally`, message utilisateur |
| 06 | `etape/06-adapter-l-affichage` | `v06_Adapter_l_affichage` | `MovieCard` null-safe sur `ApiShow` |
| 07 | `etape/07-detail-dynamique` | `v07_Detail_dynamique` | Page `/movies/:id` avec dépendance `[id]` |
| 08 | `etape/08-tests-et-finalisation` | `v08_Tests_et_finalisation` | Suppression des données locales, grille de tests, README |

Le tag pointe sur la version fusionnée dans `main` correspondant à la fin de l'étape.

## Arborescence (src)

- `types/ApiShow.ts` — types calqués sur la réponse TVmaze
- `components/MovieCard.tsx` — carte null-safe (image, genres, année, résumé)
- `pages/Movies.tsx` — catalogue distant (async/await + loading + erreurs)
- `pages/MovieDetails.tsx` — détail distant `/movies/:id`

## Documentation

- `docs/api-analyse.md` — observation de l'API (étape 01)
- `docs/grille-de-tests.md` — recette des scénarios testés (étape 08)
- `INSTALLATION_WINDOWS.md` — installation/scripts Windows