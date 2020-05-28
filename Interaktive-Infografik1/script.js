"use strict";
//definieren der Zahlen
var af08 = 1028;
var af18 = 1235.5;
var sa08 = 1132.6;
var sa18 = 1261.5;
var eu08 = 4965.7;
var eu18 = 4209.3;
var na08 = 6600.4;
var na18 = 6035.6;
var as08 = 12954.7;
var as18 = 16274.1;
var au08 = 1993.0;
var au18 = 2100.5;
// Gesamtemission
var welt18 = af18 + sa18 + eu18 + na18 + as18 + au18;
// Emission im Vergleich zu Welt
var af18zuwelt = 100 / welt18 * af18;
var sa18zuwelt = 100 / welt18 * sa18;
var eu18zuwelt = 100 / welt18 * eu18;
var na18zuwelt = 100 / welt18 * na18;
var as18zuwelt = 100 / welt18 * as18;
var au18zuwelt = 100 / welt18 * au18;
// Kontrollrechnung ob das Gesamtergebnis 100% ergibt
var kontrollerechnung = af18zuwelt + sa18zuwelt + eu18zuwelt + na18zuwelt + as18zuwelt + au18zuwelt;
// Emission relativ zur Welt alpha ergebnis
var af0818a = 100 / af08 * af18;
var sa0818a = 100 / sa08 * sa18;
var eu0818a = 100 / eu08 * eu18;
var na0818a = 100 / na08 * na18;
var as0818a = 100 / as08 * as18;
var au0818a = 100 / au08 * au18;
// Emission relativ zur Welt finale ergebnis (100-alpha)
var af0818f = 100 - af0818a;
var sa0818f = 100 - sa0818a;
var eu0818f = 100 - eu0818a;
var na0818f = 100 - na0818a;
var as0818f = 100 - as0818a;
var au0818f = 100 - au0818a;
// Vergleich 2018 zu 2008
var af0818k = af18 - af08;
var sa0818k = sa18 - sa08;
var eu0818k = eu18 - eu08;
var na0818k = na18 - na08;
var as0818k = as18 - as08;
var au0818k = au18 - au08;
console.log("Die Emission von Europa ist: " + eu18 + " kg CO2 | Relativ zur Gesamtemission der Welt verursacht Europa damit " + eu18zuwelt + " % | Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um " + eu0818f + "% verändert | 2018 im Vergleich zu 2008 sind das " + eu0818k + " kg CO2");
console.log("Die Emission von Nordamerika ist: " + na18 + " kg CO2 | Relativ zur Gesamtemission der Welt verursacht Nordamerika damit " + na18zuwelt + " % | Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + na0818f + "% verändert | 2018 im Vergleich zu 2008 sind das " + na0818k + " kg CO2");
console.log("Die Emission von Südamerika ist: " + sa18 + " kg CO2 | Relativ zur Gesamtemission der Welt verursacht Südamerika damit " + sa18zuwelt + " % | Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + sa0818f + "% verändert | 2018 im Vergleich zu 2008 sind das " + sa0818k + " kg CO2");
console.log("Die Emission von Afrika ist: " + af18 + " kg CO2 | Relativ zur Gesamtemission der Welt verursacht Afrika damit " + af18zuwelt + " % | Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um " + af0818f + "% verändert | 2018 im Vergleich zu 2008 sind das " + af0818k + " kg CO2");
console.log("Die Emission von Asien ist: " + as18 + " kg CO2 | Relativ zur Gesamtemission der Welt verursacht Asien damit " + as18zuwelt + " % | Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um " + as0818f + "% verändert | 2018 im Vergleich zu 2008 sind das " + as0818k + " kg CO2");
console.log("Die Emission von Australien ist: " + au18 + " kg CO2 | Relativ zur Gesamtemission der Welt verursacht Australien damit " + au18zuwelt + " % | Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um " + au0818f + "% verändert | 2018 im Vergleich zu 2008 sind das " + au0818k + " kg CO2");
//# sourceMappingURL=script.js.map