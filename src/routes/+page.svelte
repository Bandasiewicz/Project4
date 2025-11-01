<script lang="ts">
  import CharacterDisplay from '$lib/components/CharacterDisplay.svelte';
  import CharacterCard from '$lib/components/CharacterCard.svelte';
  import { characters, type Character } from '$lib/characters';
  import { scale } from 'svelte/transition'; // ANIMATION WEEEEEEEEEE

  /* the list we will render */
  let list = $state<Character[]>([]);

  /* subscribe to the store; when it changes, update list */
  $effect(() => {
    const unsub = characters.subscribe((v) => { list = v; });
    return () => unsub();
  });
</script>

<!-- form on top -->
<CharacterDisplay />

<!-- list under -->
<section class="stack">
  {#each list as ch}
    <!-- small scale-in so new items feel alive; minimal duration -->
    <div in:scale={{ duration: 120 }}>
      <CharacterCard character={ch} />
    </div>
  {/each}
</section>

<style>
  .stack {
    display: grid;
    gap: 12px;
    margin-top: 16px;
  }
</style>
