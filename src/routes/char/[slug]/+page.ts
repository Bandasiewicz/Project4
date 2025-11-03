// PageLoad = typescript type for load functions in SvelteKit
import type { PageLoad } from './$types';

// this function runs before +page.svelte loads
// grabs the id from URL and passes it to the page component
export const load: PageLoad = async ({ params }) => {
  return { slug: params.slug };
};