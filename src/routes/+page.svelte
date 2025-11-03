<script lang="ts">
  import CharacterDisplay from '$lib/components/CharacterDisplay.svelte';
  import CharacterCard from '$lib/components/CharacterCard.svelte';
  // characters = the store, Character = typescript type
  import { characters, type Character } from '$lib/storage/characters';
  // scale = animation function from svelte
  import { scale } from 'svelte/transition';

  // local copy of character list for rendering
  let list = $state<Character[]>([]);

  // $effect runs whenever dependencies change (similar to useEffect in react)
  $effect(() => {
    // subscribe to store - function runs every time store updates
    const unsub = characters.subscribe((v) => { 
      list = v; // copy store value to local list
    });
    // cleanup function - unsubscribe when component unmounts
    return () => unsub();
  });
</script>


<!-- imported form will go on top  -->
<CharacterDisplay />


<section class="stack">
  {#each list as ch}
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
