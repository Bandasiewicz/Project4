<script lang="ts">
  // Character = typescript type definition
  import type { Character } from '$lib/storage/characters';

  // receiving character object from parent component
  const { character } = $props<{ character: Character }>();
</script>

<!--preview showing  character’s name -->
<a href="/char/{character.id}" class="card">
  <h2>{character.name}</h2>
</a>

<style>
  .card {
    display: block;
    border: 2px solid var(--line);
    border-radius: 0.5rem;
    padding: 1rem;
    margin-bottom: 1rem;
    background: #2e1f16;
    color: var(--text);
    text-decoration: none;
    cursor: pointer;
    transition: background 0.2s ease;
  }

  .card:hover {
    background: #413429;
  }

  h2 {
    margin: 0;
    color: var(--text);
  }
</style>