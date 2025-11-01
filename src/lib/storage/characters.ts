// src/lib/characters.ts
import { writable, type Writable, get } from 'svelte/store';
import { browser } from '$app/environment';

/* types for stats + character, simple and clear */
export type Stats = {
  hp: number;
  strength: number;
  magic: number;
  skill: number;
};

export type Character = {
  id: string;          // unique id for the URL, not the name
  name: string;        // what the user typed
  description: string; // what the user typed
  stats: Stats;        // numbers we parsed from strings
};

/* localStorage key name */
const STORAGE_KEY = 'characters';

/* load any saved characters on page open (only in browser) */
function loadInitial(): Character[] {
  if (!browser) return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Character[]) : [];
  } catch {
    return [];
  }
}

/* this is the list everyone else will read */
export const characters: Writable<Character[]> = writable(loadInitial());

/* save to localStorage whenever the list changes (browser only) */
if (browser) {
  characters.subscribe((list) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch {
      /* ignore private mode / quota errors */
    }
  });
}

/* add a new character to the list, returns the object */
export function addCharacter(name: string, description: string, stats: Stats) {
  // simple id using time; if you prefer random: crypto.randomUUID()
  const id = Date.now().toString();
  const next: Character = { id, name, description, stats };
  characters.update((curr) => [next, ...curr]); // new first, old under
  return next;
}

/* helper: get one character right now (no subscription) */
export function getById(id: string) {
  return get(characters).find((c) => c.id === id);
}
