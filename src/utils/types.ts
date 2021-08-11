export interface Favorite {
  artist: string;
  title: string;
  year: string;
}

interface ReleaseBase {
  artist: string;
  title: string;
}

export interface ReleaseData extends ReleaseBase, Document {
  _id: string;
  date: Date | null;
}

export interface Release extends ReleaseBase {
  id: string;
  date: string | null;
}

interface SongBase {
  artist: string;
  title: string;
  link: string;
}

export interface SongData extends SongBase, Document {
  _id: string;
}

export interface Song extends SongBase {
  id: string;
}

export interface ListItem {
  artist: string;
  title: string;
  id?: string;
}

export interface Results {
  [key: string]: ListItem[];
}

export type Tuple = [string, ListItem[]];
