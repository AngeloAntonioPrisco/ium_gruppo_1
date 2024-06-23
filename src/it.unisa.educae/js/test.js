let correctAnswers = [];
let givedAnswers = [];

let intervalId;
let remainingSeconds;

async function read_domande(){

    try {

        let response = await fetch("../resources/json/questions.json");
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

        let domandeJSON = JSON.stringify(result);

        localStorage.setItem("domande", domandeJSON);
        givedAnswers = Array(JSON.parse(domandeJSON).length).fill("0");

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

    let correctAnswer = domande[key].Risposta_corretta;

    if(!(correctAnswer in correctAnswers)){

        correctAnswers.push(correctAnswer);

    }

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

    for (let el of document.querySelectorAll('.domande')) {

        el.classList.remove('disabled');

    }

}

function finish(){

    localStorage.setItem("domandeCorrette", JSON.stringify(correctAnswers));
    localStorage.setItem("domandeDate", JSON.stringify(givedAnswers));

    correctAnswers = [];
    givedAnswers = [];

    window.location.href = "../html/risultati-test.html";

}

function startTimer(seconds) {

    remainingSeconds = seconds;
    const timerElement = document.getElementById('timer');
    clearInterval(intervalId);

    intervalId = setInterval(() => {

        if (remainingSeconds > 0) {

            const minutes = Math.floor(remainingSeconds / 60);
            const seconds = remainingSeconds % 60;
            timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            remainingSeconds--;

        } else {

            finish();

            clearInterval(intervalId);

        }

    }, 1000);

}

function addTwoMinutes(element) {

    remainingSeconds += 120;

    const timerElement = document.getElementById('timer');
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;

    timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    element.classList.add('disabled');

}

function dupeMinutes(element) {

    remainingSeconds += remainingSeconds;

    const timerElement = document.getElementById('timer');
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;

    timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    element.classList.add('disabled');

}

function fifty(elemento){

    let key = parseInt(document.getElementById("count").innerText) - 1;
    let allDivs = document.querySelectorAll('.answer');
    let remainingDivs = Array.from(allDivs).filter(div => !(div.innerText === correctAnswers[key]));

    let randomIndex = Math.floor(Math.random() * remainingDivs.length);
    let randomDiv = remainingDivs[randomIndex];

    for (let el of allDivs) {

        if (el.innerText !== randomDiv.innerText &&
            el.innerText !== correctAnswers[key]){

            el.parentElement.classList.add('disabled');

        }

    }

    elemento.classList.add('disabled');

}

function giveAnswer(elemento){

    let key = parseInt(document.getElementById("count").innerText) - 1;

    givedAnswers[key] = elemento.children[0].innerText;

    change('avanti');

}

function results() {

    let container = document.getElementById('container');

    let correctAnswers = JSON.parse(localStorage.getItem("domandeCorrette"));
    let givedAnswers = JSON.parse(localStorage.getItem("domandeDate"));

    container.innerHTML = '';

    let index = 0;

    console.log(correctAnswers);

    for (let correctAnswer of correctAnswers) {

        let questionDiv = document.createElement('div');
        questionDiv.classList.add('question-result');


        let givenAnswer = givedAnswers[index] !== "0" ? givedAnswers[index] : "Non data";
        let questionText = document.createElement('div');

        questionText.innerText = `Risposta ${index + 1}. ${givenAnswer}`;
        questionText.classList.add('question-text');
        questionDiv.appendChild(questionText);

        if (givedAnswers[index] === "0") {

            questionDiv.classList.add('not-answered');
            questionDiv.classList.add('answerResult');

        } else if (givedAnswers[index] === correctAnswer) {

            questionDiv.classList.add('correct');
            questionDiv.classList.add('answerResult');

        } else {

            questionDiv.classList.add('incorrect');
            questionDiv.classList.add('answerResult');

        }

        container.appendChild(questionDiv);
        index++;

    }

    let correctCount = correctAnswers.filter((ans, idx) => ans === givedAnswers[idx]).length;
    let incorrectCount = givedAnswers.filter(ans => ans !== "0" && ans !== correctAnswers[givedAnswers.indexOf(ans)]).length;
    let notAnsweredCount = givedAnswers.filter(ans => ans === "0").length;

    document.getElementById('numero').innerText = correctAnswers.length;
    document.getElementById('giuste').innerText = correctCount;
    document.getElementById('wrong').innerText = incorrectCount;
    document.getElementById('nondate').innerText = notAnsweredCount;

    correctAnswers = [];
    givedAnswers = [];

    localStorage.setItem("domandeCorrette", JSON.stringify(correctAnswers));
    localStorage.setItem("domandeDate", JSON.stringify(givedAnswers));

}


