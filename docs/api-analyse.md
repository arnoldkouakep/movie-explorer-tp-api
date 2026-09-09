# Étape 01 — Observer l'API TVmaze

## Objectif

Avant toute ligne de code, comprendre la réponse JSON renvoyée par l'API pour pouvoir la typer en
TypeScript (étape 02) puis l'afficher correctement (étapes 03 → 06).

## Endpoints observés

| Endpoint | Rôle |
| --- | --- |
| `GET https://api.tvmaze.com/shows` | Liste des séries (le catalogue). Sans clé d'accès. |
| `GET https://api.tvmaze.com/shows/:id` | Détail d'une série, ex. `GET /shows/1`. |

Reproduire l'observation :

```bash
curl https://api.tvmaze.com/shows
curl https://api.tvmaze.com/shows/1
```

## Champs utiles d'un objet `show`

| Champ | Type | Rôle pour l'application |
| --- | --- | --- |
| `id` | `number` | Identifiant unique (route `/movies/:id`) |
| `name` | `string` | Titre affiché |
| `genres` | `string[]` | Genres (ex. `["Drama", "Science-Fiction"]`) |
| `premiered` | `string \| null` | Date `"YYYY-MM-DD"` — on en extraira l'année |
| `summary` | `string \| null` | Description **au format HTML** |
| `image` | `{ medium: string; original: string } \| null` | Affiche de la série |

Exemple extrait de `GET /shows/1` :

```json
{
  "id": 1,
  "name": "Under the Dome",
  "genres": ["Drama", "Science-Fiction", "Thriller"],
  "premiered": "2013-06-24",
  "summary": "... <p>texte avec balises HTML</p> ...",
  "image": { "medium": "https://...", "original": "https://..." }
}
```

## Points d'attention

- `image` et `summary` peuvent être `null` → l'affichage devra être "null-safe".
- `summary` contient des balises HTML → à afficher avec précaution.
- `premiered` est une date `YYYY-MM-DD` → la transformer en année (type `Movie.year`).
- Le catalogue est volumineux (~milliers de séries) → afficher une limite (ex. 12).