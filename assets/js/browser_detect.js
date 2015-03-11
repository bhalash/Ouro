(function() {
    'use strict';
    /*
     * Ghetto Browser Detection
     * ------------------------
     * Now with 100% less jQuery! \o/
     */

    var agent = navigator.userAgent.toLowerCase();
    var body = document.getElementsByTagName('body')[0];

    if (/android|webos|iphone|ipod|blackberry|iemobile|opera mini/i.test(agent)) {
        // Any handheld device.
        body.classList.add('mobile');
    }

    if (!!agent.match(/i(pad|phone|pod).+(version\/6\.\d+ mobile)/i)) {
        // iOS 6
        body.classList.add('ios-6');
    }

    if (!!agent.match(/i(pad|phone|pod).+(version\/7\.\d+ mobile)/i)) {
        // iOS 7 
        body.classList.add('ios-7');
    }

    if (!!agent.match(/i(pad|phone|pod).+(version\/8\.\d+ mobile)/i)) {
        // iOS 8
        body.classList.add('ios-8');
    }

    if (/webkit/.test(agent)) {
        // Webkit 
        body.classList.add('webkit');
    }

    if (/chrome/.test(agent)) {
        // Google Chrome
        body.classList.add('chrome');
    }

    if (/firefox/.test(agent)) {
        body.classList.add('firefox');
    }
})();