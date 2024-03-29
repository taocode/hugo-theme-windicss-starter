# Hugo Starter Theme with ~~Windi~~ **Uno**CSS

Starter files for a Hugo theme with ~~Windi~~ **Uno**CSS.

[![Netlify Status](https://api.netlify.com/api/v1/badges/e4a560ce-4be2-41f6-ba0c-9b9d3adcbef4/deploy-status)](https://app.netlify.com/sites/hugo-theme-windicss-starter/deploys)

## [✨Example Site💨 🔗](https://hugo-theme-windicss-starter.netlify.app/)


- set up to use [UnoCSS](https://unocss.dev/) the successor to [Windi CSS](https://windicss.org)
- includes the [typography preset](https://unocss.dev/presets/typography) plugin for styling of markdown content (including dark mode friendly *.prose* color fixes)
- use [UnoCSS CLI](https://unocss.dev/integrations/cli) integration *(@apply and @screen directives can be used via [Directive Transformer](https://unocss.dev/transformers/directives), consider using: [UnoCSS Shortcuts](https://unocss.dev/config/shortcuts))* to build optimized uno.css with used classes *(only)*, circumventing the need to purge.
- works as separate theme repo or as a local theme folder within a Hugo site
- exampleSite uses basic template setup with an index page, an about page and a posts category
- dark mode toggle
- responsive navigation header with ~~pure css~~ *minimal javascript* for 1) dark mode and 2) mobile "hamburger" nav on small screens; *the pure CSS solution to the hamburger menu fails keyboard accessibility.*
- included helper partials to show Hugo parameters and UnoCSS breakpoints during development

## What this theme is NOT

This theme is a starter setup theme to aid in developing Hugo themes using the UnoCSS framework. It is ***not*** a standalone theme ready to use.

## Try before you buy

Start a local server with `exampleSite` or [see the example site on Netlify](https://hugo-theme-windicss-starter.netlify.app/)

```bash
cd themes/unocss-starter/exampleSite
npm install
npm run example
```

## Prerequisites

Make sure to install `unocss` as detailed in the [UnoCSS CLI Docs](https://unocss.dev/integrations/cli).

```bash
npm install -g unocss
```

Make sure to use a minimum Hugo version of v0.69.0 and above.

## Basic usage to develop a separate Theme repo

- clone and rename the repo

```bash
git clone https://github.com/taocode/hugo-theme-windicss-starter themes/unocss-starter
```

- to make that theme your own, switch into the newly created folder, remove the git history from this starter repo and initiate a new git repo

```bash
cd themes/unocss-starter
rm -rf .git
git init
```

- copy `uno.config.ts`, `package.json` and optionally `config.toml` from `exampleSite` to your project root (`/`)

- install the necessary node packages

```bash
npm install
```

- edit the `config.toml` file in project root (`/`) or `exampleSite/` to reflect the `unocss-starter`

```toml
# in config.toml
theme = "unocss-starter" # your new theme name here
```

## Usage directly within a Hugo repo as a theme package

- start a new Hugo site

```bash
hugo new site new-site
```

- switch into the theme folder an clone the starter repo

```bash
cd new-site
git clone https://github.com/taocode/hugo-theme-windicss-starter themes/unocss-starter
```

- switch into the newly created theme folder, remove the git history from this starter repo and install the node packages

```bash
cd themes/unocss-starter
rm -rf .git
npm install
```

- edit the `config.toml` file in `new-site/` to reflect the unocss-starter

```toml
# in config.toml
theme = "new-theme-name" # your new theme name here
```

- switch to the root of the new-site repo and start a server to view the index site

```bash
cd new-site
hugo server --disableFastRender
```

Your content should go into `new-site/content`, the development of the site layout is done within `new-site/themes/new-theme-name/layout`.

## Developer Mode Helpers

Included are the following helpers for the development phase (not visible in production):

- `/partials/dev-parameters.html`, which shows basic Hugo page parameters
- `/partials/dev-size-indicator.html`, which displays a floating circle in the upper right corner to indicate the UnoCSS responsive breakpoints

If you don't need any of these helpers anymore, just delete the corresponding line from `/layouts/_default/baseof.html`.

## Deploy to Netlify

If you use this starter theme and want to deploy your site to [Netlify](https://www.netlify.com/), you *MAY* encounter a build error about unocss missing:

Netlify will need to `npm install` dependencies of this starter. Please copy the `exampleSite/package.json` and `exampleSite/uno.config.ts` file to the root of your project:

```json
cp themes/unocss-starter/exampleSite/package.json ./
cp themes/unocss-starter/exampleSite/uno.config.ts ./
```

This introduces the dependencies UnoCSS needs, Netlify will run the installation automatically on deploy, use: `npm run build`.
