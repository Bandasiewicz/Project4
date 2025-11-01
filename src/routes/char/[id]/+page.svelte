<!-- src/routes/char/[id]/+page.svelte -->
<script lang="ts">
  import { getById, type Character } from '$lib/characters';

  /* this page receives data from +page.ts above */
  const { data } = $props<{ data: { id: string } }>();

  /* this is what we show on the screen */
  let character = $state<Character | undefined>(undefined);

  /* when the id changes, we look it up */
  $effect(() => {
    character = getById(data.id);
  });
</script>

{#if character}
  <article class="detail">
    <h1 class="title">{character.name}</h1>
    <h2 class="sub">{character.description}</h2>

    <div class="stats">
      <div><span>HP</span><strong>{character.stats.hp}</strong></div>
      <div><span>Strength</span><strong>{character.stats.strength}</strong></div>
      <div><span>Magic</span><strong>{character.stats.magic}</strong></div>
      <div><span>Skill</span><strong>{character.stats.skill}</strong></div>
    </div>
  </article>
{:else}
  <!-- if we don’t find it, show link back -->
  <p class="missing">Character not found. <a href="/">Go back</a>.</p>
{/if}

<style>
  .detail {
    border: 2px solid var(--line);
    border-radius: var(--card-radius);
    padding: 16px;
    background: #2e1f16; /* no rgba */
  }
  .title { margin: 0 0 8px 0; color: var(--text); }
  .sub {
    margin: 0 0 16px 0;
    color: var(--text);
    opacity: 0.9;
    border-bottom: 2px solid var(--line);
    padding-bottom: 10px;
  }
  .stats {
    display: grid;
    /* auto-fit so it wraps without @media */
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 12px;
  }
  .stats div {
    border: 2px solid var(--line);
    border-radius: 12px;
    padding: 12px;
    text-align: center;
    background: #2e1f16;
  }
  .stats span {
    display: block;
    font-size: 0.9rem;
    opacity: 0.9;
    color: var(--text);
  }
  .stats strong {
    display: block;
    font-size: 1.4rem;
    color: var(--text);
  }
</style>
