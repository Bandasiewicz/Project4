<!-- header + slot + your footer stay the same -->
<header class="site_header">
  <h1>William's Fire Emblem Character Creator</h1>
</header>

<a href="/about">About</a>

<main class="container">
  <slot /> <!--All the svelete files that will be used will be palced inside of slot-->
  <!--This ensures that there will always be a header and a footer no matter what happens-->
</main>

<footer id="contact">
  <p>Copyright &copy; <i>2025</i> The FanPage Foundation</p>
  <a href="https://fireemblemwiki.org/wiki/Main_Page" target="_self">Texts sourced from FireEmblemWiki</a>
  <a href="mailto:wb0071@hws.edu">
    <p title="Totally Fake Email">Email me: wb0071@hws.edu</p>
  </a>
</footer>

<style>
  :root {
    --bg: #554436;
    --line: #2e1f16;
    --text: #f8ebd2;
    --muted: #413429;
    --card-radius: 14px;
    --col-max: 720px;
  }

  :global(html),
  :global(body) {
    padding: 0;
    margin: 0;
    background: var(--bg);
    color: var(--text);
    font-family: system-ui, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  .container {
    max-width: var(--col-max);
    margin: 0 auto;
    padding: 24px 16px 64px;
  }

  :global(.site_header h1) {
    margin: 0;
    font-size: 70px;
    background-color: #1a1a1a;
    border-bottom: 5px solid #2e1f16;
    color: #F8EBD2;
    padding-left: 40px;
  }

  /*Footerstuff------*/

  #contact {
    background-color: #2e1f16;
    color: #F8EBD2;
    border-top: 6px solid #bbae98;
    padding: 20px;
    font-size: 0.95em;
  }

  #contact a {
    color: #4890fa;
    text-decoration: underline;
    display: block;
    margin-top: 8px;
  }

  #contact p {
    margin: 0.25rem 0;
  }
</style>
