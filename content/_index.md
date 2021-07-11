---
author: Mark Jones
title: Hugo WindiCSS Starter
date: 2021-05-15
description: Hugo Theme with Windi CSS CLI integration for lightning-fast builds.
---

## 🌫️WindiCSS⚡ Hugo Static Site💨

This is a hybrid of [hugo-with-windicss](https://github.com/pontakornth/hugo-with-windicss) for WindiCSS CLI integration and [hugo-theme-tailwindcss-starter](https://github.com/dirkolbrich/hugo-theme-tailwindcss-starter) for theme layouts and basic header+navigation. Thanks to both @pontakornth and @dirkolbrich for sharing their work!

## What's Added?

- Dark Mode Toggle
- A tiny bit of Javascript for dark mode toggle and to improve keyboard access to the mobile navigation toggle

## Why?

TailwindCSS takes over 20 seconds on development startup and build using the recommended Hugo pipes PostCSS integration. Similarly, there's a heafty multi-second delay penalty anytime TailwindCSS needs to rebuild all its classes.

**I ❤️ TailwindCSS but that's *too slow* to be fun.**

I've tried enabling JIT mode to reduce CSS overhead and improve startup time, like on other Jamstack systems (generally done this way with App frameworks, 11ty, VUE, Svelte, etc...), but it fails with the recommended Hugo PostCSS integration.

## Limitations

- ***No @apply*** directives 😔 but check out [Windi CSS Shortcuts](https://windicss.org/features/shortcuts.html) 😊
- New pages or layout html may require a restart to catch the new file's class usage *(but that's like 3 seconds so...)*

## *Speediest!*

For a 5 page site, this stack both builds for production and has development up and running in under 5 seconds!💨

I've found WindiCSS to be faster than TailwindCSS, JIT or otherwise. WindiCSS adds some niceties too, including the group syntax *md:(flex etc)* and *!lg:block (!important)* enhancements. The downside to using the WindiCSS enhancements is that you can't just switch to TailwindCSS without refactoring their use.

## Example Site

Try before you buy! [View on Netlify](https://hugo-theme-windicss-starter.netlify.app/)

1. `cd themes/hugo-theme-windicss-starter/exampleSite`
1. `pnpm install` *(or `npm install`, `yarn install`)*
1. `pnpm example` *(or `npm run example`, `yarn example`)*

## Installation

1. Copy `windicss.config.js` and `package.json` from `exampleSite/` to project root (`/`)
1. Run `pnpm install` (or `yarn install` `npm install`) in project root


### ***Optional:*** Customize Theme

1. Copy (or rename) theme for customization: `cp themes/hugo-theme-windicss-starter themes/my-theme`
1. Remove .git from copied theme: `rm -rf themes/my-theme/.git`
1. Update `/windicss.config.js` and `/package.json` scripts: replace `hugo-theme-windicss-starter` with `my-theme`

## Usage

- `pnpm dev` starts development server.
- `pnpm build` builds for production.


### Key files

Paths are relative to the theme root

- WindiCSS Config file: `exampleSite/windicss.config.js`
  - `windicss` CLI generates: /themes/hugo-theme-windicss-starter/assets/css/windi.css
- NPM Package: `exampleSite/package.json`
  - installs `windicss` (`pnpm install`)
  - provides scripts for `dev` and `build`
- Site CSS: `assets/css/site.css`
  - Has Menu and Dark Mode toggle display directives
  - Place for any sitewide CSS 
  - *no @apply* directives available with this CLI integration
- CSS Variables: `assets/css/vars.css`
  - Color variables added here to make dark mode shift a tidier
- Javascript: `assets/js/site.js`
  - Handles Dark Mode toggle, uses localStorage
  - Place any additional custom js here.

## License

MIT License