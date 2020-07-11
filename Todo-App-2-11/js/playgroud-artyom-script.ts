declare var Artyom: any;

window.addEventListener("load", function (): void {
    const artyom: any = new Artyom();

    artyom.addCommands({
        indexes: ["erstelle Aufgabe *"],
        smart: true,
        action: function (i: any, wildcard: string): void {
            console.log("Neue Aufgabe wird erstellt: " + wildcard);
            alert();
            todoliste.unshift({ todoText: wildcard, todosChecked: false });
            drawListToDOM();
        }

    });

    function startContinuousArtyom(): void {
        artyom.fatality();

        setTimeout(
            function (): void {
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
                }).then(function (): void {
                    console.log("Ready!");
                });
            },
            250);
    }

    startContinuousArtyom();
    // Add a single command
    var commandHello = {
        indexes: ["hello", "good morning", "hey"], // These spoken words will trigger the execution of the command
        action: function () { // Action to be executed when a index match with spoken word
            artyom.say("Hey buddy ! How are you today?");
        }
    };

    artyom.addCommands(commandHello); // Add the command with addCommands method. Now

    // Or add multiple commands at time
    var myGroup = [
        {
            description: "If my database contains the name of a person say something",
            smart: false, // a Smart command allow you to use wildcard in order to retrieve words that the user should say
            // Ways to trigger the command with the voice
            indexes: ["welche Aufgabe muss ich noch erledigen"],
            // Do something when the commands is triggered
            action: function (): void {
                let aufgabe: string[] = [];

                for (let index = 0; index < todoliste.length; index++) {

                    if (todoliste[index].todosChecked) {

                    } else {
                        aufgabe.push(todoliste[index].todoText);
                        console.log(todoliste[index].todoText);
                    }
                }

            }
        }];
    artyom.addCommands(myGroup);

});




