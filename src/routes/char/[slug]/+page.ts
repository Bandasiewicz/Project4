import type { PageLoad } from './$types';

/* very small: pass the route param into the page as data */
export const load: PageLoad = async ({ params }) => {
  return { id: params.id };
};