// src/lib/characters.ts
import { writable, type Writable, get } from 'svelte/store';
import { browser } from '$app/environment';

export type Stats = {
  hp: number;
  strength: number;
  magic: number;
  skill: number;
};

export type Character = {
  id: string;          // unique id for the URL, not the name
  name: string;        
  description: string; // what the user typed
  stats: Stats;        
};

const STORAGE_KEY = 'characters'; // key name for localStorage

// grab saved characters when page loads (if any exist)
function loadInitial(): Character[] {
  if (!browser) return []; // skip if server-side rendering
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return []; // if parse fails just start empty
  }
}

// main store - starts with whatever was saved
export const characters: Writable<Character[]> = writable(loadInitial());

// auto-save to localStorage whenever store changes
if (browser) {
  characters.subscribe((list) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch {
      // quota exceeded or private mode, just ignore
    }
  });
}

// adds new character to front of list
export function addCharacter(name: string, description: string, stats: Stats) {
  const id = Date.now().toString(); // timestamp as id (good enough for now)
  const next: Character = { id, name, description, stats };
  // update() lets me modify store - put new one first
  characters.update((curr) => [next, ...curr]);
  return next;
}

// find character by id without subscribing (just look it up right now)
export function getById(id: string) {
  return get(characters).find((c) => c.id === id);
}