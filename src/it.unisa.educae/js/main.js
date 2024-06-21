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

function navOpen(){

    sessionStorage.setItem('navbar', 'true');

    document.getElementById("nav").innerHTML =
        "<nav class=\"sidebar2\">" +
        "    <ul>" +
        "        <li><button><img class=\"user\" src=\"../resources/img-sidebar/user.png\" width=\"18\"/><p>Bentornato eesi</p></button></li>" +
        "        <li class=\"open\"><button onclick='navClose()'><img src=\"../resources/img-sidebar/Open_Sidebar_Off.svg\" width=\"16px\"/></button></li>" +
        "        <li><button onclick='back()'><img src=\"../resources/img-sidebar/Home_Button_On.svg\" width=\"18px\"/><p>Home</p></button></li>" +
        "        <li><button onclick='libreria()'><img src=\"../resources/img-sidebar/Bookshelf_Button_Off.svg\" width=\"18px\"/><p>Libreria</p></button></li>" +
        "        <li><button onclick='medals()'><img src=\"../resources/img-sidebar/Trophy_Button_Off.svg\"  width=\"18px\"/><p>Bacheca</p></button></li>" +
        "        <li><button onclick='testSection()'><img src=\"../resources/img-sidebar/Test_Button_Off.svg\"  width=\"18px\"/><p>Test</p></button></li>" +
        "    </ul>" +
        "" +
        "    <div class=\"navbuttons\">" +
        "        <ul>" +
        "            <li><button onclick='exit()'><img src=\"../resources/img-sidebar/Logout_Button.png\" width=\"12px\"/><p>Esci</p></button></li>" +
        "            <li><button><img src=\"../resources/img-sidebar/Toggle_Button_Off.png\" width=\"20px\"/><p>Modalità lettura</p></button></li>" +
        "            <li><button><img src=\"../resources/img-sidebar/Toggle_Button_Off.png\" width=\"20px\"/><p>Filtro daltonismo</p></button></li>" +
        "        </ul>" +
        "    </div>" +
        "</nav>";

}

function navClose(){

    sessionStorage.setItem('navbar', 'false');

    document.getElementById("nav").innerHTML =
        "<nav class=\"sidebar\">" +
        "    <ul>" +
        "        <li><button><img class=\"user\" src=\"../resources/img-sidebar/user.png\" width=\"18px\"/></button></li>" +
        "        <li class=\"open\"><button onclick=\"navOpen()\"><img src=\"../resources/img-sidebar/Open_Sidebar_Off.svg\" width=\"16px\"/></button></li>" +
        "        <li><button onclick='back()'><img src=\"../resources/img-sidebar/Home_Button_On.svg\" width=\"18px\"/></button></li>" +
        "        <li><button onclick='libreria()'><img src=\"../resources/img-sidebar/Bookshelf_Button_Off.svg\" width=\"18px\"/></button></li>" +
        "        <li><button onclick='medals()'><img src=\"../resources/img-sidebar/Trophy_Button_Off.svg\"  width=\"18px\"/></button></li>" +
        "        <li><button onclick='testSection()'><img src=\"../resources/img-sidebar/Test_Button_Off.svg\"  width=\"18px\"/></button></li>" +
        "    </ul>" +
        "" +
        "    <div class=\"navbuttons\">" +
        "        <ul>" +
        "            <li><button onclick='exit()'><img src=\"../resources/img-sidebar/Logout_Button.png\" width=\"12px\"/></button></li>" +
        "            <li><button><img src=\"../resources/img-sidebar/Toggle_Button_Off.png\" width=\"20px\"/></button></li>" +
        "            <li><button><img src=\"../resources/img-sidebar/Toggle_Button_Off.png\" width=\"20px\"/></button></li>" +
        "        </ul>" +
        "    </div>" +
        "</nav>";

}

function navbar(){

    let flag = sessionStorage.getItem('navbar');

    if (flag !== null){

        if (flag === "false") {

            document.getElementById("nav").innerHTML =
                "<nav class=\"sidebar\">" +
                "    <ul>" +
                "        <li><button><img class=\"user\" src=\"../resources/img-sidebar/user.png\" width=\"18px\"/></button></li>" +
                "        <li class=\"open\"><button onclick=\"navOpen()\"><img src=\"../resources/img-sidebar/Open_Sidebar_Off.svg\" width=\"16px\"/></button></li>" +
                "        <li><button onclick='back()'><img src=\"../resources/img-sidebar/Home_Button_On.svg\" width=\"18px\"/></button></li>" +
                "        <li><button onclick='libreria()'><img src=\"../resources/img-sidebar/Bookshelf_Button_Off.svg\" width=\"18px\"/></button></li>" +
                "        <li><button onclick='medals()'><img src=\"../resources/img-sidebar/Trophy_Button_Off.svg\"  width=\"18px\"/></button></li>" +
                "        <li><button onclick='testSection()'><img src=\"../resources/img-sidebar/Test_Button_Off.svg\"  width=\"18px\"/></button></li>" +
                "    </ul>" +
                "" +
                "    <div class=\"navbuttons\">" +
                "        <ul>" +
                "            <li><button onclick='exit()'><img src=\"../resources/img-sidebar/Logout_Button.png\" width=\"12px\"/></button></li>" +
                "            <li><button><img src=\"../resources/img-sidebar/Toggle_Button_Off.png\" width=\"20px\"/></button></li>" +
                "            <li><button><img src=\"../resources/img-sidebar/Toggle_Button_Off.png\" width=\"20px\"/></button></li>" +
                "        </ul>" +
                "    </div>" +
                "</nav>";

        } else {

            navOpen();

        }

    } else {

        navClose();

    }
}
