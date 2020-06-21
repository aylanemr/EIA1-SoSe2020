"use strict";
// window.addEventListener("load", function () {
//     var ton: string[] = [
//         "assets/A.mp3",
//         "assets/C.mp3",
//         "assets/F.mp3",
//         "assets/G.mp3",
//         "assets/hihat.mp3",
//         "assets/kick.mp3",
//         "assets/laugh-1.mp3",
//         "assets/laugh-2.mp3",
//         "assets/snare.mp3"
//     ];
//     function playSample(x: number): void {
//         var sounds: HTMLAudioElement = new Audio(ton[x]);
//         sounds.play();
//     }
//     document.querySelector("#btn1").addEventListener("click", function () { playSample(0); });
//     document.querySelector("#btn2").addEventListener("click", function () { playSample(1); });
//     document.querySelector("#btn3").addEventListener("click", function () { playSample(2); });
//     document.querySelector("#btn4").addEventListener("click", function () { playSample(3); });
//     document.querySelector("#btn5").addEventListener("click", function () { playSample(4); });
//     document.querySelector("#btn6").addEventListener("click", function () { playSample(5); });
//     document.querySelector("#btn7").addEventListener("click", function () { playSample(6); });
//     document.querySelector("#btn8").addEventListener("click", function () { playSample(7); });
//     document.querySelector("#btn9").addEventListener("click", function () { playSample(8); });
//     document.querySelector("#micro").addEventListener("click", recording);
//     document.querySelector("#play").addEventListener("click", playstop);
//     var defbeat: string[] = ["assets/kick.mp3", "assets/snare.mp3", "assets/hihat.mp3"];
//     var n: number = 0;
//     var interbeat: number;
//     function playBeats():void {
//         interbeat = setInterval(function () {
//             playSample(defbeat[n]);
//             n++;
//             if (n >= defbeat.length) {
//                 n = 0;
//             }
//         }, 500);
//     }
//     function playstop(): void {
//         var psbutton: HTMLElement = document.querySelector("#play");
//         if (psbutton.getAttribute("class") == "fas fa-play") {
//             psbutton.setAttribute("class", "fas fa-stop");
//             playBeats();
//         } else {
//             psbutton.setAttribute("class", "fas fa-play");
//             stopBeat();
//         }
//     }
//     function stopBeat() {
//         clearInterval(interbeat);
//     }
//     //Beat aufnehmen
//     var rec: boolean = false;
//     function recording(): void {
//         if (rec) {
//             rec = false;
//         } else {
//             rec = true;
//         }
//     }
//     function playSample(mp3: string): void {
//         if (rec) {
//             defbeat.push(mp3);
//         }
//         const sound: HTMLAudioElement = new Audio(mp3);
//         sound.play();
//     }
//     document.querySelector("#delete").addEventListener("click", function () { defbeat = []; });
// })
//Inspiriert von Coleen und Jasmin
window.addEventListener('load', function () {
    document.querySelector("#btn1").addEventListener("click", function () { playSample("assets/A.mp3"); });
    document.querySelector("#btn2").addEventListener("click", function () { playSample("assets/C.mp3"); });
    document.querySelector("#btn3").addEventListener("click", function () { playSample("assets/F.mp3"); });
    document.querySelector("#btn4").addEventListener("click", function () { playSample("assets/G.mp3"); });
    document.querySelector("#btn5").addEventListener("click", function () { playSample("assets/hihat.mp3"); });
    document.querySelector("#btn6").addEventListener("click", function () { playSample("assets/kick.mp3"); });
    document.querySelector("#btn7").addEventListener("click", function () { playSample("assets/laugh-1.mp3"); });
    document.querySelector("#btn8").addEventListener("click", function () { playSample("assets/laugh-2.mp3"); });
    document.querySelector("#btn9").addEventListener("click", function () { playSample("assets/snare.mp3"); });
    var aufnahme = ["assets/kick.mp3", "assets/snare.mp3", "assets/hihat.mp3"];
    var index = 0;
    var soundIntervall;
    var micon = false;
    function recording() {
        if (micon) {
            micon = false;
            document.getElementById("micro").style.color = "#fff";
        }
        else {
            micon = true;
            document.getElementById("micro").style.color = "#00d200";
        }
    }
    function playSample(kombi) {
        if (micon) {
            aufnahme.push(kombi);
        }
        const ton = new Audio(kombi);
        ton.play();
    }
    function plystpBtn() {
        var psbutton = document.querySelector("#play");
        if (psbutton.getAttribute("class") == "fas fa-play") {
            psbutton.setAttribute("class", "fas fa-stop");
            plyBtn();
        }
        else {
            psbutton.setAttribute("class", "fas fa-play");
            stpBtn();
        }
    }
    function plyBtn() {
        soundIntervall = setInterval(function () {
            playSample(aufnahme[index]);
            index++;
            if (index >= aufnahme.length) {
                index = 0;
            }
        }, 500);
    }
    function stpBtn() {
        clearInterval(soundIntervall);
    }
    document.querySelector("#play").addEventListener("click", plystpBtn);
    document.querySelector("#micro").addEventListener("click", recording);
    document.getElementById("delete").addEventListener("click", function () { aufnahme = []; });
});
//# sourceMappingURL=script.js.map