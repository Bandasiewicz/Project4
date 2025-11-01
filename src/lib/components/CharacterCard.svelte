<script lang="ts">
  import type { Character } from '$lib/characters';

  /* this receives one character from the parent */
  const { character } = $props<{ character: Character }>();
</script>

<!-- the <a> is the clickable thing; it builds the new URL -->
<a class="card" href={`/char/${character.id}`}>
  <h3>{character.name}</h3>
  <p class="desc">{character.description}</p>
</a>

<style>
  .card {
    border: 2px solid var(--line);
    border-radius: var(--card-radius);
    padding: 16px;
    background: #2e1f16;
    cursor: pointer;
    transition: transform 0.12s ease, box-shadow 0.12s ease, background 0.12s ease;
    outline: none;
  }
  .card:hover, .card:focus-visible {
    transform: translateY(-2px);
    background: #413429;
  }
  h3 {
    margin: 0 0 6px 0;
    color: var(--text);
  }
  .desc {
    margin: 0;
    color: var(--text);
    opacity: 0.9;
  }
</style>
