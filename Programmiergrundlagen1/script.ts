//definieren der Zahlen
var af08: number = 1028;
var af18: number = 1235.5;
var sa08: number = 1132.6;
var sa18: number = 1261.5;
var eu08: number = 4965.7;
var eu18: number = 4209.3;
var na08: number = 6600.4;
var na18: number = 6035.6;
var as08: number = 12954.7;
var as18: number = 16274.1;
var au08: number = 1993.0;
var au18: number = 2100.5;  


// auf zwei nachkommastellen abrunden
function komma(x) {
    return Number.parseFloat(x).toFixed(2);
  }

// Gesamtemission
var welt18: number = af18 + sa18 + eu18 + na18 + as18 + au18;

// Emission im Vergleich zu Welt
var af18zuwelt: number = komma( 100 * af18 / welt18);
var sa18zuwelt: number = komma( 100 * sa18 / welt18);
var eu18zuwelt: number = komma( 100 * eu18 / welt18);
var na18zuwelt: number = komma( 100 * na18 / welt18);
var as18zuwelt: number = komma( 100 * as18 / welt18);
var au18zuwelt: number = komma( 100 * au18 / welt18);


// Kontrollrechnung ob das Gesamtergebnis 100% ergibt
// var kontrollerechnung:number=af18zuwelt+sa18zuwelt+eu18zuwelt+na18zuwelt+as18zuwelt+au18zuwelt;
// console.log(kontrollerechnung)


// Emission relativ zur Welt alpha ergebnis
var af0818a: number = 100 / af08 * af18;
var sa0818a: number = 100 / sa08 * sa18;
var eu0818a: number = 100 / eu08 * eu18;
var na0818a: number = 100 / na08 * na18;
var as0818a: number = 100 / as08 * as18;
var au0818a: number = 100 / au08 * au18;
 
// Emission relativ zur Welt finale ergebnis (100-alpha)
var af0818f: number = komma(af0818a - 100);
var sa0818f: number = komma(sa0818a - 100);
var eu0818f: number = komma(eu0818a - 100);
var na0818f: number = komma(na0818a - 100);
var as0818f: number = komma(as0818a - 100);
var au0818f: number = komma(au0818a - 100);

// Vergleich 2018 zu 2008
var af0818k:number = komma(af18 - af08);
var sa0818k:number = komma(sa18 - sa08);
var eu0818k:number = komma(eu18 - eu08);
var na0818k:number = komma(na18 - na08);
var as0818k:number = komma(as18 - as08);
var au0818k:number = komma(au18 - au08);

// console.log("Die Emission von Europa ist: "+eu18+" kg CO2 | Relativ zur Gesamtemission der Welt verursacht Europa damit "+eu18zuwelt+" % | Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um " +eu0818f+"% verändert | 2018 im Vergleich zu 2008 sind das "+eu0818k+" kg CO2" );
// console.log("Die Emission von Nordamerika ist: "+na18+" kg CO2 | Relativ zur Gesamtemission der Welt verursacht Nordamerika damit "+na18zuwelt+" % | Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um " +na0818f+"% verändert | 2018 im Vergleich zu 2008 sind das "+na0818k+" kg CO2" );
// console.log("Die Emission von Südamerika ist: "+sa18+" kg CO2 | Relativ zur Gesamtemission der Welt verursacht Südamerika damit "+sa18zuwelt+" % | Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um " +sa0818f+"% verändert | 2018 im Vergleich zu 2008 sind das "+sa0818k+" kg CO2" );
// console.log("Die Emission von Afrika ist: "+af18+" kg CO2 | Relativ zur Gesamtemission der Welt verursacht Afrika damit "+af18zuwelt+" % | Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um " +af0818f+"% verändert | 2018 im Vergleich zu 2008 sind das "+af0818k+" kg CO2" );
// console.log("Die Emission von Asien ist: "+as18+" kg CO2 | Relativ zur Gesamtemission der Welt verursacht Asien damit "+as18zuwelt+" % | Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um " +as0818f+"% verändert | 2018 im Vergleich zu 2008 sind das "+as0818k+" kg CO2" );
// console.log("Die Emission von Australien ist: "+au18+" kg CO2 | Relativ zur Gesamtemission der Welt verursacht Australien damit "+au18zuwelt+" % | Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um " +au0818f+"% verändert | 2018 im Vergleich zu 2008 sind das "+au0818k+" kg CO2" );


function europeON() {

    document.querySelector(".europe").setAttribute('id', 'besucht');

    document.querySelector("#titleRegion").innerHTML ="Europa";

    document.querySelector('.chart').setAttribute('style', 'height:'+ eu18zuwelt + 'px');

    document.querySelector("#ah").innerHTML = eu18 + " kg CO2";
    document.querySelector("#ap").innerHTML = "Die Emission in 2018 von Europa";
    document.querySelector("#bh").innerHTML = eu18zuwelt + " %";
    document.querySelector("#bp").innerHTML = "Relativ zur Gesamtemission der Welt verursacht Europa";
    document.querySelector("#ch").innerHTML = eu0818f + " %";
    document.querySelector("#cp").innerHTML = "Veränderung der Emission für Europa in 2018 im Vergleich zu 2008";
    document.querySelector("#dh").innerHTML = eu0818k + " kg CO2";
    document.querySelector("#dp").innerHTML = "Veränderung in 2018 im Vergleich zu 2008";
}
window.addEventListener('load', function(){
    document.querySelector(".europe").addEventListener("click", europeON);
});

function northamericaON() {

    document.querySelector(".northamerica").setAttribute('id', 'besucht');

    document.querySelector("#titleRegion").innerHTML ="Nordamerika";

    document.querySelector('.chart').setAttribute('style', 'height:'+ na18zuwelt + 'px');

    document.querySelector("#ah").innerHTML = na18 + " kg CO2";
    document.querySelector("#ap").innerHTML = "Die Emission in 2018 von Nordamerika";
    document.querySelector("#bh").innerHTML = na18zuwelt + " %";
    document.querySelector("#bp").innerHTML = "Relativ zur Gesamtemission der Welt verursacht Nordamerika";
    document.querySelector("#ch").innerHTML = na0818f + " %";
    document.querySelector("#cp").innerHTML = "Veränderung der Emission für Nordamerika in 2018 im Vergleich zu 2008";
    document.querySelector("#dh").innerHTML = na0818k + " kg CO2";
    document.querySelector("#dp").innerHTML = "Veränderung in 2018 im Vergleich zu 2008";
}
window.addEventListener('load', function(){
    document.querySelector(".northamerica").addEventListener("click", northamericaON);
});


function southamericaON() {

    document.querySelector(".southamerica").setAttribute('id', 'besucht');

    document.querySelector("#titleRegion").innerHTML ="Südamerika";
   
    document.querySelector('.chart').setAttribute('style', 'height:'+ sa18zuwelt + 'px');

    document.querySelector("#ah").innerHTML = sa18 + " kg CO2";
    document.querySelector("#ap").innerHTML = "Die Emission in 2018 von Südamerika";
    document.querySelector("#bh").innerHTML = sa18zuwelt + " %";
    document.querySelector("#bp").innerHTML = "Relativ zur Gesamtemission der Welt verursacht Südamerika";
    document.querySelector("#ch").innerHTML = sa0818f + " %";
    document.querySelector("#cp").innerHTML = "Veränderung der Emission für Südamerika in 2018 im Vergleich zu 2008";
    document.querySelector("#dh").innerHTML = sa0818k + " kg CO2";
    document.querySelector("#dp").innerHTML = "Veränderung in 2018 im Vergleich zu 2008";
}
window.addEventListener('load', function(){
    document.querySelector(".southamerica").addEventListener("click", southamericaON);
});


function africaON() {
    
    document.querySelector(".africa").setAttribute('id', 'besucht');
    
    document.querySelector("#titleRegion").innerHTML ="Afrika";

    document.querySelector('.chart').setAttribute('style', 'height:'+ af18zuwelt + 'px');

    document.querySelector("#ah").innerHTML = af18 + " kg CO2";
    document.querySelector("#ap").innerHTML = "Die Emission in 2018 von Afrika";
    document.querySelector("#bh").innerHTML = af18zuwelt + " %";
    document.querySelector("#bp").innerHTML = "Relativ zur Gesamtemission der Welt verursacht Afrika";
    document.querySelector("#ch").innerHTML = af0818f + " %";
    document.querySelector("#cp").innerHTML = "Veränderung der Emission für Afrika in 2018 im Vergleich zu 2008";
    document.querySelector("#dh").innerHTML = af0818k + " kg CO2";
    document.querySelector("#dp").innerHTML = "Veränderung in 2018 im Vergleich zu 2008";
}
window.addEventListener('load', function(){
    document.querySelector(".africa").addEventListener("click", africaON);
});


function asiaON() {

    document.querySelector(".asia").setAttribute('id', 'besucht');
    
    document.querySelector("#titleRegion").innerHTML ="Asien";

    document.querySelector('.chart').setAttribute('style', 'height:'+ as18zuwelt + 'px');

    document.querySelector("#ah").innerHTML = as18 + " kg CO2";
    document.querySelector("#ap").innerHTML = "Die Emission in 2018 von Asien";
    document.querySelector("#bh").innerHTML = as18zuwelt + " %";
    document.querySelector("#bp").innerHTML = "Relativ zur Gesamtemission der Welt verursacht Asien";
    document.querySelector("#ch").innerHTML = as0818f + " %";
    document.querySelector("#cp").innerHTML = "eränderung der Emission für Asien in 2018 im Vergleich zu 2008";
    document.querySelector("#dh").innerHTML = as0818k + " kg CO2";
    document.querySelector("#dp").innerHTML = "Veränderung in 2018 im Vergleich zu 2008";
}
window.addEventListener('load', function(){
    document.querySelector(".asia").addEventListener("click", asiaON);
});


function australiaON() {

    document.querySelector(".australia").setAttribute('id', 'besucht');

    document.querySelector("#titleRegion").innerHTML ="Australien";

    document.querySelector('.chart').setAttribute('style', 'height:'+ au18zuwelt + 'px');

    document.querySelector("#ah").innerHTML = au18 + " kg CO2";
    document.querySelector("#ap").innerHTML = "Die Emission in 2018 von Australien";
    document.querySelector("#bh").innerHTML = au18zuwelt + " %";
    document.querySelector("#bp").innerHTML = "Relativ zur Gesamtemission der Welt verursacht Australien";
    document.querySelector("#ch").innerHTML = au0818f + " %";
    document.querySelector("#cp").innerHTML = "Veränderung der Emission für Australien in 2018 im Vergleich zu 2008";
    document.querySelector("#dh").innerHTML = au0818k + " kg CO2";
    document.querySelector("#dp").innerHTML = "Veränderung in 2018 im Vergleich zu 2008";
}
window.addEventListener('load', function() {
    document.querySelector(".australia").addEventListener("click", australiaON);
});