import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
   preprocess: preprocess(),
	kit: {
		//  hydrate the <div id="svelte"> element in src/app.html
		//  target: '#svelte',
		//  Customize your site by customizing the file
		//   `public/build/bundle.css` (and other files) in the build folder, locate the file for Svelte Kit 
		//   to use as its main entry point.
		// files: { public: 'static' },
		//  appDir can be used to allow a subfolder within your project to act as the root directory,
		//    which may be useful if you are deploying multiple sites or apps from one  codebase. the data 
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	},
};

export default config;
