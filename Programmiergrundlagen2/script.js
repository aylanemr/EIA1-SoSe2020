"use strict";
// Probs gehen raus an unser Tutor Markus
// 7.1
var sounds = [];
sounds.push(new Audio("assets/A.mp3"));
sounds.push(new Audio("assets/C.mp3"));
sounds.push(new Audio("assets/F.mp3"));
sounds.push(new Audio("assets/G.mp3"));
sounds.push(new Audio("assets/hihat.mp3"));
sounds.push(new Audio("assets/kick.mp3"));
sounds.push(new Audio("assets/laugh-1.mp3"));
sounds.push(new Audio("assets/laugh-2.mp3"));
sounds.push(new Audio("assets/snare.mp3"));
function playSample(x) {
    sounds[x].play();
}
window.addEventListener("load", function () {
    document.querySelector("#ol").addEventListener("click", function () { playSample(0); });
    document.querySelector("#om").addEventListener("click", function () { playSample(1); });
    document.querySelector("#or").addEventListener("click", function () { playSample(2); });
    document.querySelector("#ml").addEventListener("click", function () { playSample(3); });
    document.querySelector("#mm").addEventListener("click", function () { playSample(4); });
    document.querySelector("#mr").addEventListener("click", function () { playSample(5); });
    document.querySelector("#ul").addEventListener("click", function () { playSample(6); });
    document.querySelector("#um").addEventListener("click", function () { playSample(7); });
    document.querySelector("#ur").addEventListener("click", function () { playSample(8); });
});
// 7.2
function drummachine() {
    setInterval(function () {
        playSample(5);
        playSample(8);
        playSample(4);
    }, 500);
}
window.addEventListener("load", function () {
    document.querySelector("#play").addEventListener("click", drummachine);
});
//# sourceMappingURL=script.js.map