// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Qizhen Yang";
export const SITE_DESCRIPTION =
  "Welcome to Qizhen Yang's personal website! Here you can find my blog posts and projects.";
export const TWITTER_HANDLE = "@q1zhen_";
export const MY_NAME = "Qizhen Yang";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
