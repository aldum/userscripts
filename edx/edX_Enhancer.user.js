// ==UserScript==
// @name          edX Enhancer
// @namespace     http://github.com/aldum/userscripts
// @version       0.1
// @description   edX enhancing scriptery
// @author        aldum
// @match         https://courses.edx.org/courses/*/progress
// @updateURL     https://github.com/aldum/userscripts/raw/master/edx/edX_Enhancer.meta.js
// @downloadURL   https://github.com/aldum/userscripts/raw/master/edx/edX_Enhancer.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $('#course-info-progress > section  dl dd').each((v, e) => {
        const el = $(e);
        const n = eval(el.html());
        if (n != 1 && !Number.isNaN(n)) el.css({'color': '#A70131', 'font-weight': 'bold'});
    });
})();

