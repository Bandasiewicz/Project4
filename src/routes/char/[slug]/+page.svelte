<script lang="ts">
  import { getBySlug, type Character } from '$lib/storage/characters'; // adjust path if needed

  // Runes mode: receive props from +page.ts via $props()
  const { data } = $props<{ data: { slug: string } }>();

  let character = $state<Character | undefined>(undefined);

  // When data.slug changes, look up the character
  $effect(() => {
    character = getBySlug?.(data.slug);
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
  <p class="missing">Character not found. Go back to the <a href="/">list</a> and create one.</p>
{/if}

<style>
  .detail {
    border: 2px solid var(--line);
    border-radius: var(--card-radius);
    padding: 16px;
    background: rgba(0,0,0,0.2);
  }
  .title { margin: 0 0 8px 0; color: var(--text); }
  .sub {
    margin: 0 0 16px 0; color: var(--text); opacity: 0.9;
    border-bottom: 2px solid var(--line); padding-bottom: 10px;
  }
  .stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
  .stats div {
    border: 2px solid var(--line);
    border-radius: 12px;
    padding: 12px; text-align: center; background: #2e1f16;
  }
  .stats span { display: block; font-size: 0.9rem; opacity: 0.9; color: var(--text); }
  .stats strong { display: block; font-size: 1.4rem; color: var(--text); }
  .missing a { color: #4890fa; }
</style>
