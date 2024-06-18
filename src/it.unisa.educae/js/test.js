async function read_domande(){

    try {

        let response = await fetch("../js/questions.json");
        const key = "questions";

        if (!response.ok) {

            throw new Error('Errore nella richiesta: ' + response.statusText);

        }

        let jsonData = await response.json();

        if (jsonData.hasOwnProperty(key)) {

            return jsonData[key];

        } else {

            console.log("Chiave non trovata nel file JSON.");

        }

    } catch (error) {

        console.error("Errore:", error);

    }

}

function store_domande(){

    read_domande().then(result => {

        localStorage.setItem("domande", JSON.stringify(result));
        domande();

    })

}

function domande(){

    let key = parseInt(document.getElementById("count").innerText) - 1;
    let domande = JSON.parse(localStorage.getItem("domande"));
    let questionsDiv = document.getElementById("questions");

    let answerRed = document.getElementById("answer1");
    let answerYellow = document.getElementById("answer2");
    let answerBlue = document.getElementById("answer3");
    let answerGreen = document.getElementById("answer4");

    questionsDiv.innerText = domande[key].Domanda;

    answerRed.innerText = domande[key].Risposta_uno;
    answerYellow.innerText = domande[key].Risposta_due;
    answerBlue.innerText = domande[key].Risposta_tre;
    answerGreen.innerText = domande[key].Risposta_quattro;

}

function change(flag){

    let counter = document.getElementById("count");
    let domandeSessione = JSON.parse(localStorage.getItem("domande"));

    switch (flag) {

        case "avanti":

            if (parseInt(counter.innerText) in domandeSessione) {

                counter.innerText = parseInt(counter.innerText) + 1;
                domande();

            }

            break;

        case "indietro":

            if (counter.innerText !== "1"){

                counter.innerText = parseInt(counter.innerText) - 1;

                domande();

            }
            break;

    }

}

function finish(){

    window.location.href = "../html/risultati-test.html"

}
