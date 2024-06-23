function back(){

    window.location.href = "../html/index.html";

}

function testSection(){

    window.location.href = "../html/test.html";

}

function medals(){

    window.location.href = "../html/bacheca-trofei.html";

}

function libreria(){

    window.location.href = "../html/libreria.html";

}

function exit(){

    window.location.href = "../html/auth-home.html";

}

function save(element){

    let parent = element.parentElement;

    let nodes;
    let titles;

    if(sessionStorage.getItem('savedNode') !== null) {

        nodes = JSON.parse(sessionStorage.getItem('savedNode'));
        titles = JSON.parse(sessionStorage.getItem('title'));

    } else {

        nodes = [];
        titles = [];

    }

    let title = parent.querySelector(".text-wrapper-4").innerText;

    if (!(title in titles)) {

        element.innerHTML = "<div class=\"div-wrapper\" style=\"background-color: #e5e5e5; width: 48px; border-color: transparent\">" +
            "                    <div class=\"text-wrapper-5\" style=\"color: #1a1a1a; left: 6px;\">Salvato</div>" +
            "                    <img src=\"../resources/img-home/bookmark-svgrepo-com 1salvato.png\" style=\"width: 8.9px; top: 1.2px; height: 8.58px; position: relative; left: 36px;\">" +
            "                </div>";

        nodes.push(parent.outerHTML);
        titles.push(parent.querySelector(".text-wrapper-4").innerText);

        element.removeAttribute('onclick');
        element.setAttribute('onclick', 'desave(this)');

    }

    sessionStorage.setItem('savedNode', JSON.stringify(nodes));
    sessionStorage.setItem('title', JSON.stringify(titles));

}

function desave(element){

    element.innerHTML = "<div class=\"div-wrapper\" style=\"background-color: #e5e5e5; width: 48px; border-color: transparent\">" +
        "                        <div class=\"text-wrapper-5\" style=\"color: #1a1a1a; left: 8px;\">Salva</div>" +
        "                        <img src=\"../resources/img-home/bookmark-svgrepo-com%201salva.png\" style=\"width: 8.9px; top: 1.2px; height: 8.58px; position: relative; left: 31px;\">" +
        "                    </div>";

    let nodes = JSON.parse(sessionStorage.getItem('savedNode'));
    let titles = JSON.parse(sessionStorage.getItem('title'));

    let parent = element.parentElement;

    let nodeTwo = [];
    let title = [];

    for (let i = 0; i < titles.length; i++){

        if (titles[i] !== parent.querySelector(".text-wrapper-4").innerText){

            nodeTwo.push(nodes[i]);
            title.push(titles[i]);

        }

    }

    sessionStorage.setItem('savedNode', JSON.stringify(nodeTwo));
    sessionStorage.setItem('title', JSON.stringify(title));

    element.removeAttribute('onclick');
    element.setAttribute('onclick', 'save(this)');

}

function isSaved(element){

    let titles = JSON.parse(sessionStorage.getItem('title'));
    let parent = element.parentElement;

    if (titles !== null) {

        for (let i = 0; i < titles.length; i++) {

            if (titles[i] === parent.querySelector(".text-wrapper-4").innerText) {

                element.innerHTML = "<div class=\"div-wrapper\" style=\"background-color: #e5e5e5; width: 48px; border-color: transparent\">" +
                    "                    <div class=\"text-wrapper-5\" style=\"color: #1a1a1a; left: 6px;\">Salvato</div>" +
                    "                    <img src=\"../resources/img-home/bookmark-svgrepo-com 1salvato.png\" style=\"width: 8.9px; top: 1.2px; height: 8.58px; position: relative; left: 36px;\">" +
                    "                </div>";

                element.removeAttribute('onclick');
                element.setAttribute('onclick', 'desave(this)');

            }

        }

    }

}

function navOpen(flagIcon){

    sessionStorage.setItem('navbar', 'true');

    document.getElementById("nav").innerHTML =
        "<nav class=\"sidebar2\">" +
        "    <ul>" +
        "        <li><button><img class=\"user\" src=\"../resources/img-sidebar/user.png\" width=\"18\"/><p>Bentornato eesi</p></button></li>" +
        "        <li class=\"open\"><button onclick=\"navClose('" + flagIcon + "')\"><img src=\"../resources/img-sidebar/Open_Sidebar_Off.svg\" width=\"16px\"/></button></li>" +
        "        <li><button onclick='back()'><img class = 'bottoneHome' src=\"../resources/img-sidebar/Home_Button_Off.svg\" width=\"18px\"/><p>Home</p></button></li>" +
        "        <li><button onclick='libreria()'><img class = 'bottoneLibreria' src=\"../resources/img-sidebar/Bookshelf_Button_Off.svg\" width=\"18px\"/><p>Libreria</p></button></li>" +
        "        <li><button onclick='medals()'><img class = 'bottoneMedaglie' src=\"../resources/img-sidebar/Trophy_Button_Off.svg\"  width=\"18px\"/><p>Bacheca</p></button></li>" +
        "        <li><button onclick='testSection()'><img class = 'bottoneTest' src=\"../resources/img-sidebar/Test_Button_Off.svg\"  width=\"18px\"/><p>Test</p></button></li>" +
        "    </ul>" +
        "" +
        "    <div class=\"navbuttons\">" +
        "        <ul>" +
        "            <li><button onclick='exit()'><img src=\"../resources/img-sidebar/Logout_Button.png\" width=\"12px\"/><p>Esci</p></button></li>" +
        "            <li><button><img src=\"../resources/img-sidebar/Toggle_Button_Off.png\" width=\"20px\" onclick='yellowFilterButton(this)'/><p>Modalità lettura</p></button></li>" +
        "            <li><button><img src=\"../resources/img-sidebar/Toggle_Button_Off.png\" width=\"20px\" onclick='daltonismo(this)'/><p>Filtro daltonismo</p></button></li>" +
        "        </ul>" +
        "    </div>" +
        "</nav>";

    activateIcon(flagIcon);

}

function navClose(flagIcon){

    sessionStorage.setItem('navbar', 'false');

    document.getElementById("nav").innerHTML =
        "<nav class=\"sidebar\">" +
        "    <ul>" +
        "        <li><button><img class=\"user\" src=\"../resources/img-sidebar/user.png\" width=\"18px\"/></button></li>" +
        "        <li class=\"open\"><button onclick=\"navOpen('" + flagIcon + "')\"><img src=\"../resources/img-sidebar/Open_Sidebar_Off.svg\" width=\"16px\"/></button></li>" +
        "        <li><button onclick='back()'><img class = 'bottoneHome' class = 'bottoneHome' src=\"../resources/img-sidebar/Home_Button_Off.svg\" width=\"18px\"/></button></li>" +
        "        <li><button onclick='libreria()'><img class = 'bottoneLibreria' src=\"../resources/img-sidebar/Bookshelf_Button_Off.svg\" width=\"18px\"/></button></li>" +
        "        <li><button onclick='medals()'><img class = 'bottoneMedaglie' src=\"../resources/img-sidebar/Trophy_Button_Off.svg\"  width=\"18px\"/></button></li>" +
        "        <li><button onclick='testSection()'><img class = 'bottoneTest' src=\"../resources/img-sidebar/Test_Button_Off.svg\"  width=\"18px\"/></button></li>" +
        "    </ul>" +
        "" +
        "    <div class=\"navbuttons\">" +
        "        <ul>" +
        "            <li><button onclick='exit()'><img src=\"../resources/img-sidebar/Logout_Button.png\" width=\"12px\"/></button></li>" +
        "            <li><button><img src=\"../resources/img-sidebar/Toggle_Button_Off.png\" width=\"20px\" onclick='yellowFilterButton(this)'/></button></li>" +
        "            <li><button><img src=\"../resources/img-sidebar/Toggle_Button_Off.png\" width=\"20px\" onclick='daltonismo(this)'/></button></li>" +
        "        </ul>" +
        "    </div>" +
        "</nav>";

    activateIcon(flagIcon);

}

function navbar(flagIcon){

    let flag = sessionStorage.getItem('navbar');

    if (flag !== null){

        if (flag === "false") {

            document.getElementById("nav").innerHTML =
                "<nav class=\"sidebar\">" +
                "    <ul>" +
                "        <li><button><img class=\"user\" src=\"../resources/img-sidebar/user.png\" width=\"18px\"/></button></li>" +
                "        <li class=\"open\"><button onclick=\"navOpen('" + flagIcon + "')\"><img src=\"../resources/img-sidebar/Open_Sidebar_Off.svg\" width=\"16px\"/></button></li>" +
                "        <li><button onclick='back()'><img class = 'bottoneHome' src=\"../resources/img-sidebar/Home_Button_Off.svg\" width=\"18px\"/></button></li>" +
                "        <li><button onclick='libreria()'><img class = 'bottoneLibreria' src=\"../resources/img-sidebar/Bookshelf_Button_Off.svg\" width=\"18px\"/></button></li>" +
                "        <li><button onclick='medals()'><img class = 'bottoneMedaglie' src=\"../resources/img-sidebar/Trophy_Button_Off.svg\"  width=\"18px\"/></button></li>" +
                "        <li><button onclick='testSection()'><img class = 'bottoneTest' src=\"../resources/img-sidebar/Test_Button_Off.svg\"  width=\"18px\"/></button></li>" +
                "    </ul>" +
                "" +
                "    <div class=\"navbuttons\">" +
                "        <ul>" +
                "            <li><button onclick='exit()'><img src=\"../resources/img-sidebar/Logout_Button.png\" width=\"12px\"/></button></li>" +
                "            <li><button><img src=\"../resources/img-sidebar/Toggle_Button_Off.png\" width=\"20px\" onclick='yellowFilterButton(this)'/></button></li>" +
                "            <li><button><img src=\"../resources/img-sidebar/Toggle_Button_Off.png\" width=\"20px\" onclick='daltonismo(this)'/></button></li>" +
                "        </ul>" +
                "    </div>" +
                "</nav>";

        } else {

            navOpen();

        }

    } else {

        navClose();

    }

    activateIcon(flagIcon);

}

function activateIcon(flag){

    switch (flag){

        case "bottoneHome":
            document.querySelector(".bottoneHome").src = "../resources/img-sidebar/Home_Button_On.svg";
            break;

        case "bottoneLibreria":
            document.querySelector(".bottoneLibreria").src = "../resources/img-sidebar/Bookshelf_Button_On.svg";
            break;

        case "bottoneMedaglie":
            document.querySelector(".bottoneMedaglie").src = "../resources/img-sidebar/Trophy_Button_On.svg";
            break;

        case "bottoneTest":
            document.querySelector(".bottoneTest").src = "../resources/img-sidebar/Test_Button_On.svg";
            break;

    }

}

function yellowFilterButton(elemento){

    const yellowFilter = document.getElementById('yellowFilter');

    if (yellowFilter.style.display === 'none') {

        yellowFilter.style.display = 'block';
        elemento.src = "../resources/img-sidebar/Toggle_Button_On.png";

    } else {

        yellowFilter.style.display = 'none';
        elemento.src = "../resources/img-sidebar/Toggle_Button_Off.png";

    }

}

function daltonismo(elemento){

    if (elemento.classList.contains("pressed")){

        elemento.src = "../resources/img-sidebar/Toggle_Button_Off.png";
        elemento.classList.remove("pressed");

        if (window.location.pathname.indexOf('/ium_gruppo_1/src/it.unisa.educae/html/risultati-test.html') !== -1){

            for (let answer of document.querySelectorAll(".correct")) {

                answer.style.backgroundColor = "#4caf50";

            }

        }

    } else {

        elemento.classList.add("pressed");
        elemento.src = "../resources/img-sidebar/Toggle_Button_On.png";

        if (window.location.pathname.indexOf('/ium_gruppo_1/src/it.unisa.educae/html/risultati-test.html') !== -1){

            for (let answer of document.querySelectorAll(".correct")) {

                answer.style.backgroundColor = "#218EFF";

            }

        }

    }

}

function createCard(){

    let risorse = JSON.parse(localStorage.getItem("risorse"));
    let container = document.getElementById("container");

    for (let risorsa of risorse) {

        let card = document.createElement('div');
        card.className = 'card-risorsa';

        let abstract = risorsa.abstract;

        card.innerHTML = `
        <div class="text-wrapper-3" style="top: 68px; left: 12px;">${risorsa.rivista}</div>
        <div class="text-wrapper-4" style="top: 90px; left: 12px;">${risorsa.nome}</div>
        <p class="p" style="white-space: pre-line; top: 96px; left: 13px;">
            ${risorsa.autori_1}
            ${risorsa.autori_2}
            ${risorsa.autori_3}
        </p>

        <div class="tasto-abstract save" style="top: 17px;" onclick="save(this)">
            <div class="div-wrapper" style="background-color: #e5e5e5; width: 48px; border-color: transparent">
                <div class="text-wrapper-5" style="color: #1a1a1a; left: 8px;">Salva</div>
                <img src="../resources/img-home/bookmark-svgrepo-com%201salva.png" style="width: 8.9px; top: 1.2px; height: 8.58px; position: relative; left: 31px;">
            </div>
        </div>

        <div class="tasto-abstract" onclick='abstractView(this, "${abstract}", "${risorsa.nome}", "${risorsa.rivista}", "${risorsa.autori_1}", "${risorsa.autori_2}", "${risorsa.autori_3}", "${risorsa.testo}")' style="top: 168px;">
            <div class="div-wrapper">
                <div class="text-wrapper-5">Abstract</div>
            </div>
        </div>
        
        <div class="tasto-abstract" style="left: 157px;" onclick='leggi("${risorsa.testo}", "${risorsa.nome}")'>
            <div class="div-wrapper" style="background-color: #1a1a1a; width: 48px;">
                <div class="text-wrapper-5" style="color: #e5e5e5; left: 8px;">Leggi ></div>
            </div>
        </div>
        
        <div class="logo-rivista">
            <img class="logo-ieee" src="../resources/img-home/logo-ieee-1.svg" />
        </div>`;

        container.append(card);

    }

}

function create_card_risorse(){

    read_risorse().then(result => {

        let risorseJSON = JSON.stringify(result);

        localStorage.setItem("risorse", risorseJSON);

        createCard();

    })

}

async function read_risorse(){

    try {

        let response = await fetch("../resources/json/risorse.json");
        const key = "Risorse";

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

function abstractView(element, abstract, nome, rivista, autore1, autore2, autore3, testo){

    element.parentElement.innerHTML = `
        <div class="text-wrapper-3">${rivista}</div>
        <div class="text-wrapper-4">${nome}</div>
        <p class="p">
            ${abstract}
        </p>
        <div class="tasto-abstract" onclick='infoBack(this, "${abstract}", "${nome}", "${rivista}", "${autore1}", "${autore2}", "${autore3}", "${testo}")'>
            <div class="div-wrapper"><div class="text-wrapper-5">Indietro</div></div>
        </div>
        <div class="logo-rivista"><img class="logo-ieee" src="../resources/img-home/logo-ieee-1.svg" /></div>`;

}

function infoBack(element, abstract, nome, rivista, autore1, autore2, autore3, testo){

    element.parentElement.innerHTML = `
        <div class="text-wrapper-3" style="top: 68px; left: 12px;">${rivista}</div>
        <div class="text-wrapper-4" style="top: 90px; left: 12px;">${nome}</div>
        <p class="p" style="white-space: pre-line; top: 96px; left: 13px;">
            ${autore1}
            ${autore2}
            ${autore3}
        </p>
        <div class="tasto-abstract" onclick='abstractView(this, "${abstract}", "${nome}", "${rivista}", "${autore1}", "${autore2}", "${autore3}", "${testo}")' style="top: 168px;">
            <div class="div-wrapper">
                <div class="text-wrapper-5">Abstract</div>
            </div>
        </div>
        <div class="tasto-abstract save" style="top: 17px;" onclick="save(this)">
            <div class="div-wrapper" style="background-color: #e5e5e5; width: 48px; border-color: transparent">
                <div class="text-wrapper-5" style="color: #1a1a1a; left: 8px;">Salva</div>
                <img src="../resources/img-home/bookmark-svgrepo-com%201salva.png" style="width: 8.9px; top: 1.2px; height: 8.58px; position: relative; left: 31px;">
            </div>
        </div>
        <div class="tasto-abstract" style="left: 157px;" onclick='infoBack(this, "${nome}", "${rivista}", "${autore1}", "${autore2}", "${autore3}", "${testo}")'>
            <div class="div-wrapper" style="background-color: #1a1a1a; width: 48px;">
                <div class="text-wrapper-5" style="color: #e5e5e5; left: 8px;" onclick='leggi("${testo}", "${nome}")'>Leggi ></div>
            </div>
        </div>
        <div class="logo-rivista">
            <img class="logo-ieee" src="../resources/img-home/logo-ieee-1.svg" />
        </div>`;

}

function leggi(testo, nome){

    localStorage.setItem('testoPdf', testo);
    localStorage.setItem('continuaLeggere', nome);

    console.log(nome)

    window.location.href = "../html/risorsa.html";

}

function continuaALeggere(){

    let risorse = JSON.parse(localStorage.getItem("risorse"));
    let card = document.createElement('div');
    let container = document.getElementById("container");
    let nome = localStorage.getItem('continuaLeggere');

    console.log(nome)

    for (let risorsa of risorse) {

        if (nome === risorsa.nome){

            card.className = 'card-risorsa';

            let abstract = risorsa.abstract;

            card.innerHTML = `
            <div class="text-wrapper-3" style="top: 68px; left: 12px;">${risorsa.rivista}</div>
            <div class="text-wrapper-4" style="top: 90px; left: 12px;">${risorsa.nome}</div>
            <p class="p" style="white-space: pre-line; top: 96px; left: 13px;">
                ${risorsa.autori_1}
                ${risorsa.autori_2}
                ${risorsa.autori_3}
            </p>
    
            <div class="tasto-abstract save" style="top: 17px;" onclick="save(this)">
                <div class="div-wrapper" style="background-color: #e5e5e5; width: 48px; border-color: transparent">
                    <div class="text-wrapper-5" style="color: #1a1a1a; left: 8px;">Salva</div>
                    <img src="../resources/img-home/bookmark-svgrepo-com%201salva.png" style="width: 8.9px; top: 1.2px; height: 8.58px; position: relative; left: 31px;">
                </div>
            </div>
    
            <div class="tasto-abstract" onclick='abstractView(this, "${abstract}", "${risorsa.nome}", "${risorsa.rivista}", "${risorsa.autori_1}", "${risorsa.autori_2}", "${risorsa.autori_3}", "${risorsa.testo}")' style="top: 168px;">
                <div class="div-wrapper">
                    <div class="text-wrapper-5">Abstract</div>
                </div>
            </div>
            
            <div class="tasto-abstract" style="left: 157px;" onclick='leggi("${risorsa.testo}", "${risorsa.nome}")'>
                <div class="div-wrapper" style="background-color: #1a1a1a; width: 48px;">
                    <div class="text-wrapper-5" style="color: #e5e5e5; left: 8px;">Leggi ></div>
                </div>
            </div>
            
            <div class="logo-rivista">
                <img class="logo-ieee" src="../resources/img-home/logo-ieee-1.svg" />
            </div>`;

            container.append(card);

        }

    }

}
