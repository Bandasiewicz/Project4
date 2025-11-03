<script lang="ts">
  // purely static instructions page
</script>

<article class="card">
  <h1>About This App</h1>
  <p>
    Create a Fire Emblem`` character by filling in the form on the home page.
    Give them a name, a short appearance description, and set HP, Strength, Magic, and Skill.
  </p>
  <p>
    Each submission appears as a card in a single centered column. Click any card to open a detail page
    where the title is the character’s name, the subheader is the description, and the stats are shown clearly.
  </p>
  <p>
    Newest submissions appear on top and “pop” in with a tiny animation so you don’t miss them.
  </p>
  <p>
    Ready? Head back <a href="/">home</a> and forge a hero.
  </p>
</article>

<style>
  .card {
    border: 2px solid var(--line);
    border-radius: var(--card-radius);
    padding: 16px;
    background: rgba(0,0,0,0.15);
  }
  h1 {
    margin: 0 0 10px 0;
    color: var(--text);
    border-bottom: 2px solid var(--line);
    padding-bottom: 8px;
  }
  a { color: #4890fa; }
</style>