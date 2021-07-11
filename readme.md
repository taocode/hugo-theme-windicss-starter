# Hugo Starter Theme with Windi CSS

Starter files for a Hugo theme with Windi CSS.

## [✨Example Site💨 🔗](https://hugo-theme-windicss-starter.netlify.app/)

- set up to use [Windi CSS](https://windicss.org) - v3.1+
- includes the [typography](https://windicss.org/plugins/official/typography.html) plugin for styling of markdown content (including dark mode friendly *.prose* color fixes)
- use [Windi CSS CLI](https://windicss.org/integrations/cli.html) integration to build optimized windi.css with only used class directives, circumventing the need to purge.
- works as separate theme repo or as a local theme folder within a Hugo site
- exampleSite uses basic template setup with an index page, an about page and a posts category
- dark mode toggle
- responsive navigation header with ~~pure css~~ *minimal javascript* for 1) dark mode and 2) mobile "hamburger" nav on small screens; *the pure CSS solution to the hamburger menu fails keyboard accessibility.*
- included helper partials to show Hugo parameters and Windi CSS breakpoints during development

## What this theme is NOT

This theme is a starter setup theme to aid in developing Hugo themes using the Windi CSS framework. It is ***not*** a standalone theme ready to use.

## Try before you buy

Start a local server with `exampleSite` or [see the example site on Netlify](https://hugo-theme-windicss-starter.netlify.app/)

```bash
cd themes/hugo-theme-windicss-starter/exampleSite
npm install
npm run example
```

## Prerequisites

Make sure to install `windicss` as detailed in the [Windi CSS Docs](https://windicss.org/integrations/cli.html).

```bash
npm install -g windicss
```

Make sure to use a minimum Hugo version of v0.69.0 and above.

## Basic usage to develop a separate Theme repo

- clone and rename the repo

```bash
git clone https://github.com/taocode/hugo-theme-windicss-starter new-theme-name
```

- to make that theme your own, switch into the newly created folder, remove the git history from this starter repo and initiate a new git repo

```bash
cd new-theme-name
rm -rf .git
git init
```

- copy `windi.config.js`, `package.json` and optionally `config.toml` from `exampleSite` to your project root (`/`)

- install the necessary node packages

```bash
npm install
```

- edit the `config.toml` file in project root (`/`) or `exampleSite/` to reflect the `new-theme-name`

```toml
# in config.toml
theme = "new-theme-name" # your new theme name here
```

## Usage directly within a Hugo repo as a theme package

- start a new Hugo site

```bash
hugo new site new-site
```

- switch into the theme folder an clone the starter repo

```bash
cd new-site/themes
git clone https://github.com/taocode/hugo-theme-windicss-starter new-theme-name
```

- switch into the newly created theme folder, remove the git history from this starter repo and install the node packages

```bash
cd new-theme-name
rm -rf .git
npm install
```

- edit the `config.toml` file in `new-site/` to reflect the new-theme-name

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

## Helpers

Included are the following helpers for the development phase (not visible in production):

- `/partials/dev-parameters.html`, which shows basic Hugo page parameters
- `/partials/dev-size-indicator.html`, which displays a floating circle in the upper right corner to indicate the Windi CSS responsive breakpoints

If you don't need any of these helpers anymore, just delete the corresponding line from `/layouts/_default/baseof.html`.

## Deploy to Netlify

If you use this starter theme and want to deploy your site to [Netlify](https://www.netlify.com/), you *MAY* encounter a build error which contains the following line:

```bash
ERROR {your deploy time here} error: failed to transform resource: POSTCSS: failed to transform "css/styles.css" (text/css): PostCSS not found; install with "npm install postcss-cli". See https://gohugo.io/hugo-pipes/postcss/
```

That is, Netlify doesn't know the `npm` dependencies of this starter theme yet. For this to fix, please add a `package.json` file to the root of your repo with the content:

```json
{
    "name": "my-site",
    "version": "0.0.1",
    "description": "that is my-site",
    "repository": "https://github.com/you/my-site",
    "license": "MIT",
    "devDependencies": {
        "npm-run-all": "^4.1.5",
        "windicss": "^3.1.4"
    }
}
```

This introduces the dependencies WindiCSS Netlify will run the installation automatically on deploy, use: `npm run build`.
