import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	base: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '/'
};

export default config;