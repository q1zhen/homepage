---
layout: ../layouts/Base.astro
---

# About This Site

<time class="text-stone-400">July 2025</time>

<article>

Welcome back. If you're a returning visitor, you've probably noticed that things look a little different around here. Yes, there was yet another refactor of this site. This has become something of a tradition.

This site is built using [Astro](https://astro.build/) and hosted on [Cloudflare](https://www.cloudflare.com/).

My journey with this website has been a long series of experiments. It started back in middle school with attempts to build everything from scratch using vanilla HTML and 2000s technologies. The results were often clunky. Maintaining it and adding new content was a constant struggle.

Later, I moved on to blog frameworks like Jekyll and Hexo. They were fantastic at first, allowing me to create beautiful pages quickly using community templates. However, I soon felt constrained. Customising themes to fit my specific vision required digging through unfamiliar code, and I lacked the time to build a theme from the ground up. Those attempts were also eventually abandoned.

More recently, I discovered the Astro framework. I chose a template, customised it, and was initially pleased with the modern feel and the ease of its built-in support of using Markdown for content. It was a significant step-up, a "web framework for content-driven websites" that let me get things running in a couple of hours.

However, I soon realised my site had become bloated. Inspired by [a friend's purist approach to web development](https://kekkan.org/RsML/ns.xml) using XSLT, I inspected my own and found it laden with unused frameworks and large dependencies referenced by a single component, like an entire Font Awesome library just for one icon. It felt wrong.

That brings us to today. I've refactored again, but this time with a clearer philosophy. I've kept Astro for its powerful static site generation but stripped away the heavy template. My goal was to produce a lightweight, near-vanilla HTML output with a custom, minimal stylesheet. No bloated, third-party CSS or JavaScript libraries.

The colour palette is heavily inspired by Starbucks. It's my favourite combination that I've been using for a long time. With small adjustments it fits well on screen. Fonts are hosted on Google Fonts, where glyphs are loaded on-demand. I used Tailwind CSS, but still, the utility classes are included only if used. 

The result is a website that I'm truly satisfied with: it's incredibly lightweight, with most pages under 150kB, yet it looks and feels modern. It’s the culmination of all the past attempts.

Thanks for joining me on this journey. Enjoy the new site!

</article>
