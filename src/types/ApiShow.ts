export interface ApiImage {
  medium: string;
  original: string;
}

export interface ApiShow {
  id: number;
  name: string;
  genres: string[];
  premiered: string | null;
  summary: string | null;
  image: ApiImage | null;
}