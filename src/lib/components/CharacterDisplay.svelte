<script lang="ts">
  // addCharacter = function to add new char to store
  // Stats = typescript type for stats object
  import { addCharacter, type Stats } from '$lib/storage/characters';

  // form inputs - $state makes them reactive (re-render when changed)
  let name = $state('');
  let description = $state('');
  // storing as strings bc input type="text", convert to numbers later
  let hp = $state('0');
  let strength = $state('0');
  let magic = $state('0');
  let skill = $state('0');

  // convert string to number, default to 0 if they give a wierd answer
  const n = (s: string) => Number.parseInt(s, 10) || 0;

  // runs when form submitted
  function handleCreate() {
    if (!name.trim()) return; // need at least a name

    // build stats object
    const stats: Stats = {
      hp: n(hp),
      strength: n(strength),
      magic: n(magic),
      skill: n(skill)
    };

    addCharacter(name.trim(), description.trim(), stats);
    
    // reset form after adding
    name = '';
    description = '';
    hp = strength = magic = skill = '0';
  }
</script>

<article class="card form">
  <h2>Create a Character</h2>

  <label>
    Name
    <!-- bind:value syncs input with variable -->
    <input placeholder="Ike" bind:value={name} />
  </label>

  <label>
    Appearance (short)
    <input
      placeholder="He has blue hair, a red cape, stern gaze, is 17 years old, and uses swords"
      bind:value={description}
    />
  </label>

  <!-- stat inputs in a grid -->
  <div class="stats-grid">
    <div class="statBox">
      <label>
        <span>HP</span>
        <!-- inputmode="numeric" shows number keyboard on mobile -->
        <input inputmode="numeric" pattern="[0-9]*" bind:value={hp} />
      </label>
    </div>

    <div class="statBox">
      <label>
        <span>Strength</span>
        <input inputmode="numeric" pattern="[0-9]*" bind:value={strength} />
      </label>
    </div>

    <div class="statBox">
      <label>
        <span>Magic</span>
        <input inputmode="numeric" pattern="[0-9]*" bind:value={magic} />
      </label>
    </div>

    <div class="statBox">
      <label>
        <span>Skill</span>
        <input inputmode="numeric" pattern="[0-9]*" bind:value={skill} />
      </label>
    </div>
  </div>

  <!--  button that calls the function above -->
  <button class="primary-btn" onclick={handleCreate}>Add Character</button>
</article>

<style>
  .card.form {
    border: 2px solid var(--line);
    border-radius: var(--card-radius);
    padding: 16px;
    background: rgba(0, 0, 0, 0.2);
  }

  h2 {
    margin: 0 0 12px 0;
    border-bottom: 2px solid var(--line);
    padding-bottom: 8px;
    color: var(--text);
  }

  label {
    display: block;
    margin-bottom: 10px;
    color: var(--text);
  }

  input {
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    border: 2px solid var(--line);
    background: #2e1f16;
    color: var(--text);
    outline: none;
    font-size: 1.25rem;
  }

  input::placeholder {
    color: var(--text);
    opacity: 0.75;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
    margin: 8px 0 14px;
  }

  .statBox {
    border: 2px solid var(--line);
    border-radius: var(--card-radius);
    background: #2e1f16;
    padding: 10px 12px;
    overflow: hidden;
  }

  .statBox label {
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 6px;
    margin: 0;
    color: var(--text);
  }

  .statBox span {
    font-size: 0.95rem;
    opacity: 0.95;
    color: var(--text);
  }

  .statBox input {
    border: 2px solid var(--line);
    border-radius: 8px;
    background: #2e1f16;
    color: var(--text);
    font-size: 1.25rem;
  }

  .statBox input:focus {
    outline: 2px solid var(--text);
    outline-offset: 2px;
  }


  .primary-btn {
    display: block;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 10px 20px;
    font-size: 30px;
    text-decoration: none;
    background-color: #2e1f16;
    color: #F8EBD2;
    border-radius: 8px;
    border: 2px solid #413429;
    transition: background 0.3s ease;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
  }

  .primary-btn:hover {
    background-color: #413429;
  }


</style>
