// ==UserScript==
// @name            medium2scribe
// @author          6gb
// @version         2022.01.11
// @namespace       https://6gb.github.io/
// @description     Redirects medium based pages to scribe.rip. To add new sites, include the domain in a new @match below.
// @match     *://*.medium.com/*
// @match     *://*.plainenglish.io/*
// @match     *://*.baos.pub/*
// @match     *://*.betterprogramming.pub/*
// @match     *://*.towardsdatascience.com/*
// @match     *://*.levelup.gitconnected.com/*
// @match     *://*.blog.bitsrc.io/*
// @match     *://*.itnext.io/*
// @match     *://*.codeburst.io/*
// @match     *://*.uxdesign.cc/*
// @match     *://*.infosecwriteups.com/*
// @match     *://*.uxplanet.org/*
// @run-at          document-start
// @license         MIT
// @updateURL       https://openuserjs.org/meta/6gb/medium2scribe.meta.js
// @downloadURL     https://openuserjs.org/install/6gb/medium2scribe.user.js
// ==/UserScript==

location.replace(location.protocol + '//' + location.hostname.replace(/[^.]+\.[^.]+$/, 'scribe.rip') + location.pathname);
