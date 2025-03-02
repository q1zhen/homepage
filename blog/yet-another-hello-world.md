---
external: false
title: Yet another Hello World
description: An attempt to make a lightweight site
date: 2025-03-02
---

Yep, another refactor here.

You have probably seen [my blog post introducing the last refactor](/blog/hello-world) around six months ago. That was the time when I started to use the [Astro](https://astro.build) framework and picked a random template on its official website. It looked nice and was just like any other website that heavily relies on a template.

I was not feeling anything wrong about it until I heard that my friend started to build [his own website](https://kekkan.org/), and his solution was definitely a shock to me. He is a tech purist, and he decided to develop his own XML standard and render the whole site using XSML just because he does not like HTML. The whole thing is transformed to some vanilla HTML with a few lines of CSS. And the outcome looks nice. He made his site super-lightweight.

So I started to inspect my website, and I found that it had been way too bloated: I had a whole bundle of Tailwind CSS that probably 10% is being used; there was probably a Vue.js or React.js or whatsoever framework referenced by some random component deep down within the template; a whole Font Awesome was included just for a small GitHub icon that appeared once on the page. Compared with my friend's website, the whole thing just seemed to be erroneous.

Apparently, I am not so geek-ish as he is. I do not feel like maintaining a whole set of standards and formats just for a couple of my blog posts on trivial content. At the same time, I still wished to have the contents updated with ease.

I continued to use Astro: it is just a static content generator that does no harm, and it is the template that needs a refactor. My wish is to produce some near-vanilla HTML output on the client's side and continue using the easily-maintained Markdown content managing in my Git repository. No external CSS (except for web fonts) is being used. No random JavaScript libraries. I wrote the stylesheet for every component on my own, and Astro compiles and compresses them together for me.

This is quite a minimalistic design that I am satisfied with. I got most of my inspirations on the design from [motherf**kingwebsite.com](https://motherfuckingwebsite.com/), some work by [Kenya Hara](https://en.wikipedia.org/wiki/Kenya_Hara), [NYC Subway signs](https://transitgifts.com/collections/new-york-subway-signs), the Astro template I previously used, [some MUJI posters](https://www.muji.com/hk-en/event/poster_display/), the design of MoMA, and the appearance of some Christian Churches in Hong Kong. I love modern designs.

The whole thing was made within a Saturday afternoon. I was not intentionally making a responsive design as I was only testing on a desktop device, but it still somehow looks great on most mobile devices.

For the choice on fonts, I used Vercel's [Geist](https://vercel.com/font) font (also currently my favorite sans-serif font) for most of the texts, [Rubik](https://fonts.google.com/specimen/Rubik) and [Rubki Mono One](https://fonts.google.com/specimen/Rubik+Mono+One) for headings and parts I want to make stylistic. All of them are hosted over Google Fonts, the only external contents I am using. These add roughly 100kB~150kB (depending on the number of fonts used in the page) extra load on network resources, which I think is acceptable.

For better visual effects, I also added a `ClientRouter`, provided by Astro, that allows seamless transitions when clicking on links. This is simple by adding the `transition:animate` attribute on the element:

```html
<LayoutBase>
	<slot slot="meta" name="meta" />
	<Nav slot="header" />
	<div id="main-container" slot="main" transition:animate="slide">
		<slot name="main" />
	</div>
	<Footer slot="footer" />
</LayoutBase>
```

The extra CSS and JavaScript add approximately 10kB. The content of the HTML page is also roughly 10kB. Summing them up, for pages without images, the size can be kept under 200kB. This is perfect (and even outperforms my friend's since he uses heavier fonts) for me.

No idea why I decided to spend almost a whole day on all these things, but it just feels so good to see the outcomes. Especially that they look great and are super lightweight at the same time.
