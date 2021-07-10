---
author: Dirk Olbrich
title: Advanced Post Demo
date: 2021-05-14
pageTitle: Optionally Override Title on Page
intro: Optional introductory *lead paragraph*
excerpt: Optionally override listing excerpt
---

A basic blog post example with intro and optional on-page title override

## Heading With Class {class="!text-$c-brand-light"}

Note that you'll need to include the `!` to override color because this is in a `.prose` block unless you edit the `windicss.config.js` to use `inherit` color override under the `typography`.

Notice that the class is `text-$c-brand-light`; `$c-brand-light = var(--c-brand-light)`

You can set class with inline html if goldmark is `unsafe`.
