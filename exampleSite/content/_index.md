---
author: Mark Jones
title: Hugo UnoCSS Starter
date: 2023-05-06
description: Hugo Theme with Uno CSS CLI integration for lightning-fast builds.
---

## 🌠UnoCSS ⚡Hugo Static Site💨

This UnoCSS upgrade used to be based on WindiCSS (hence the project name). It started life as a hybrid of [hugo-with-windicss](https://github.com/pontakornth/hugo-with-windicss) for WindiCSS CLI integration and [hugo-theme-tailwindcss-starter](https://github.com/dirkolbrich/hugo-theme-tailwindcss-starter) for theme layouts and basic header+navigation.

### UnoCSS: Apparent Heir and Successor to WindiCSS 

*[WindiCSS is dead](https://windicss.org/posts/sunsetting.html). Long live [UnoCSS](https://unocss.dev/)!*

[UnoCSS](https://unocss.dev/) replaces [WindiCSS](https://windicss.org/) and brings its whole atomic CSS advantages and it's even faster than WindiCSS. This is excellent but now some of my sites that use WindiCSS based on this starter are outdated and I'd rather migrate them to UnoCSS that has a future. I found [@goldcoders huno project using hugo and uno](https://github.com/goldcoders/huno) helpful and you may find tips there or that it's a better starting point for your project.

Thanks to @pontakornth, @dirkolbrich and @goldcoders for sharing their work!

## What's Added?

- Dark Mode Toggle
- A tiny bit of Javascript for dark mode toggle and to improve keyboard access to the mobile navigation toggle
- Icons provided by [UnoCSS PresetIcons](https://unocss.dev/presets/icons)

## Why?

TailwindCSS was taking over 20 seconds on development startup and build using the recommended Hugo pipes PostCSS integration. This was a much older version of Tailwind, v2 days. Similarly, there wa a heafty multi-second delay penalty anytime TailwindCSS needs to rebuild all its classes.

**I ❤️ TailwindCSS but that's *too slow* to be fun.**

I've tried enabling JIT mode to reduce CSS overhead and improve startup time, like on other Jamstack systems (generally done this way with App frameworks, 11ty, VUE, Svelte, etc...), but it fails with the recommended Hugo PostCSS integration.

## Limitations

- ***No @apply*** directives 😔 but check out [Uno CSS Shortcuts](https://unocss.dev/config/shortcuts) 😊
  - Use [Directives transformer](https://unocss.dev/transformers/directives) to use @apply and @screen directives but it expands the shortcuts in your CSS as currently configured. 
- New pages or layout html *may* require a restart to catch the new file's class usage *(but that's like 3 seconds so...)*

## The *Speediest!*

For a 5 page site, this stack both builds for production and has development up and running in under 5 seconds!💨

I've found UnoCSS to be faster than WindiCSS which is generally faster than TailwindCSS, JIT or otherwise. Uno & Windi add some niceties too, including the group syntax (available via [UnoCSS Variant Groups Tranformer](https://unocss.dev/transformers/variant-group)) *md:flex md:etc* and *!lg:block (!important)* enhancements. The downside to using the Windi or Uno CSS enhancements is that you can't just switch to TailwindCSS without refactoring their use.

I haven't kept up with Tailwind v3, so these comments may be only relevant to older versions.

## Example Site

Try before you buy! [View on Netlify](https://hugo-theme-windicss-starter.netlify.app/)

## Installation

1. `git submodule add https://github.com/taocode/hugo-theme-windicss-starter themes/unocss-starter`
1. `cd themes/unocss-starter/exampleSite`
1. `pnpm install` *(or `npm install`, `yarn install`)*
1. `pnpm example` *(or `npm run example`, `yarn example`)*

### Integration to Use as Site Theme

1. Update `config.toml`, set `theme = "unocss-starter"`
1. Copy `uno.config.ts` and `package.json` from `exampleSite/` to project root (`/`)
1. Run `pnpm install` (or `yarn install` `npm install`) in project root
1. `pnpm dev`

### ***Optional:*** Customize Theme

1. Copy (or rename) theme for customization: `cp themes/unocss-starter themes/my-theme`
1. Remove .git from copied theme: `rm -rf themes/my-theme/.git`
1. Update `/uno.config.ts` and `/package.json` scripts: replace `unocss-starter` with `my-theme`

## Usage

- `pnpm dev` starts development server.
- `pnpm build` builds for production.


### Key files

Paths are relative to the theme root

- UnoCSS Config file: `exampleSite/uno.config.ts`
  - `unocss` CLI generates: `assets/css/modules/_uno.css`
- NPM Package: `exampleSite/package.json`
  - installs `unocss` (`pnpm install`)
  - provides scripts for `dev` and `build`
- Site CSS: `assets/css/modules/site.css`
  - Has Menu and Dark Mode toggle display directives
  - Place for any sitewide CSS 
    - *@apply* and *@screen* directives expand into CSS
- CSS Variables: `assets/css/modules/_vars.css`
  - Color and other CSS variables are added here to make dark mode shift tidier
- Javascript: `assets/js/site.js`
  - Handles Dark Mode toggle, uses localStorage
  - Place any additional custom js here.

`*.css` under assets/css/modules will be combined and delivered as 1 CSS file. UnoCSS will only expand @apply and @screen directives in `assets/css/modules/site.css` as configured.

## License

MIT License