// ==UserScript==
// @name           medium2scribe
// @author         6gb
// @version        2022.01.10
// @downloadURL    https://raw.githubusercontent.com/6gb/u.js/main/medium2scribe.user.js
// @description    Redirects medium based pages to scribe.rip. To add new sites, include its domain in a new @match below.
// @match    *://*.medium.com/*
// @match    *://*.plainenglish.io/*
// @match    *://*.baos.pub/*
// @match    *://*.betterprogramming.pub/*
// @match    *://*.towardsdatascience.com/*
// @match    *://*.levelup.gitconnected.com/*
// @match    *://*.blog.bitsrc.io/*
// @match    *://*.itnext.io/*
// @match    *://*.codeburst.io/*
// @match    *://*.uxdesign.cc/*
// @match    *://*.infosecwriteups.com/*
// @match    *://*.uxplanet.org/*
// @run-at         document-start
// ==/UserScript==

location.replace(
  location.protocol + '//' +
  location.hostname.replace(
    /[^.]+\.[^.]+$/,
    'scribe.rip'
  ) + location.pathname
);
