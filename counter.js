'use strict';

const win = nw.Window.get();
win.setAlwaysOnTop(true);

const ioHook = require('iohook');
const keyCodeWhiteList = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
    30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 55, 57, 74, 78,
    3637, 60999, 61000, 61001, 61003, 61004, 61005, 61007, 61008, 61009, 61010, 61011];

let pressCount = 0;
let duration = 0;

function counterUpdate() {
    let cpm  = pressCount / duration * 60;
    let wpm = cpm / 5;

    document.getElementById("counter").innerText=wpm.toFixed(1);
}

window.setInterval(() => {
    duration++;
    counterUpdate();
}, 1000);

ioHook.on('keydown', event => {
    for (let i = 0; i < keyCodeWhiteList.length; i++) {
        if (event.keycode === keyCodeWhiteList[i])
            pressCount++;
    }
});

ioHook.start(false);
