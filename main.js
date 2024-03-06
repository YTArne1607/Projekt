var team = document.getElementById("team");
var los = document.getElementById("los");
var absenden = document.getElementById("absenden");


function btnLos() {
    team.innerHTML = "Lehrer";
    input.style.visibility = "visible";
    los.style.display = "none";
    absenden.style.visibility = "visible";

    zufallsfrage = fragen[id];

    document.getElementById("div2").innerHTML = zufallsfrage.frage;
}

function absendeBtn() {
    var input = document.getElementById("input").value;
    if (input.indexOf(fragen[id].antwort)) {
        alert("Richtig");
    } else if (input == "") {
        alert("Antwort muss erst eingetragen werden");
    } else {
        alert("Falsch");
    }
}

var zufallsgenerator = Math.floor (Math.random() * 1);

//const antwort1 = ["13 mio", "13 millionen", "13millionen", "13mio", "13000000", "13 mio Euro", "13 millionen Euro", "13millionen Euro", "13mio Euro", "13000000 Euro", "13 mio euro", "13 millionen euro", "13millionen euro", "13mio euro", "13000000 euro", "13 mioEuro", "13 millionenEuro", "13millionenEuro", "13mioEuro", "13000000Euro", "13 mioeuro", "13 millioneneuro", "13millioneneuro", "13mioeuro", "13000000euro"];

const fragen = [];
        fragen[0]= {frage: "Wie viel Euro verdient Harry Kane in einem Jahr?", antwort: ["13 mio" | "13 millionen" | "13millionen" | "13mio" | "13000000" | "13 mio Euro" | "13 millionen Euro" | "13millionen Euro" | "13mio Euro" | "13000000 Euro" | "13 mio euro" | "13 millionen euro" | "13millionen euro" | "13mio euro" | "13000000 euro" | "13 mioEuro" | "13 millionenEuro" | "13millionenEuro" | "13mioEuro" | "13000000Euro" | "13 mioeuro" | "13 millioneneuro" | "13millioneneuro" | "13mioeuro" | "13000000euro"]};
        fragen[1]= {frage: "Die Hauptstadt von Finnland ist...?", antwort: "Helsinki"};
        fragen[2]= {frage: "Welche Gürtelfarbe existiert nicht im Kampfsport Karate: Rot, Gelb, Orange oder Weiß?", antwort: "Rot"};
        fragen[3]= {frage: "Der Nachname des berühmten Sängers der Beatles: John...?", antwort: "Lennon"};
        fragen[4]= {frage: "Welche Farbe hat der Punkt auf der japanischen Flagge?", antwort: "Rot"};
        
        var id = Math.floor (Math.random() * fragen.length);


