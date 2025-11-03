<script lang="ts">
  /* built-in error props from SvelteKit */
  const { error, status } = $props<{ error: Error; status: number }>();
</script>

<h1>{status}</h1>
<p>{error?.message ?? 'Something went wrong :('}</p>
<p><a href="/">Go home</a></p>