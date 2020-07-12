"use strict";
window.addEventListener("load", function () {
    const artyom = new Artyom();
    artyom.addCommands({
        indexes: ["erstelle Aufgabe *"],
        smart: true,
        action: function (i, wildcard) {
            console.log("Neue Aufgabe wird erstellt: " + wildcard);
            alert();
            todoliste.unshift({ todoText: wildcard, todosChecked: false });
            drawListToDOM();
        }
    });
    function startContinuousArtyom() {
        artyom.fatality();
        setTimeout(function () {
            artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            }).then(function () {
                console.log("Ready!");
            });
        }, 250);
    }
    startContinuousArtyom();
    // Add a single command
    var commandHello = {
        indexes: ["hello", "good morning", "hey"],
        action: function () {
            artyom.say("Hey buddy ! How are you today?");
        }
    };
    artyom.addCommands(commandHello); // Add the command with addCommands method. Now
    // Or add multiple commands at time
    var myGroup = [
        {
            description: "If my database contains the name of a person say something",
            smart: false,
            // Ways to trigger the command with the voice
            indexes: ["welche Aufgabe muss ich noch erledigen"],
            // Do something when the commands is triggered
            action: function () {
                let aufgabe = [];
                for (let index = 0; index < todoliste.length; index++) {
                    if (todoliste[index].todosChecked) {
                    }
                    else {
                        aufgabe.push(todoliste[index].todoText);
                        console.log(todoliste[index].todoText);
                    }
                }
            }
        }
    ];
    artyom.addCommands(myGroup);
});
//# sourceMappingURL=playground-artyom.js.map