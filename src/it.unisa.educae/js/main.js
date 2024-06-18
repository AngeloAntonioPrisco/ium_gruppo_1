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

    if(sessionStorage.getItem('savedNode') !== null) {

        nodes = JSON.parse(sessionStorage.getItem('savedNode'));

    } else {

        nodes = [];

    }

    nodes.push(parent.outerHTML);
    sessionStorage.setItem('savedNode', JSON.stringify(nodes));

    element.innerHTML = "<div class=\"div-wrapper\" style=\"background-color: #e5e5e5; width: 48px; border-color: transparent\">" +
        "                    <div class=\"text-wrapper-5\" style=\"color: #1a1a1a; left: 6px;\">Salvato</div>" +
        "                    <img src=\"../resources/img-home/bookmark-svgrepo-com 1salvato.png\" style=\"width: 8.9px; top: 1.2px; height: 8.58px; position: relative; left: 36px;\">" +
        "                </div>";

    element.removeAttribute('onclick');
    element.setAttribute('onclick', 'desave(this)');

}

function desave(element){

    element.innerHTML = "<div class=\"div-wrapper\" style=\"background-color: #e5e5e5; width: 48px; border-color: transparent\">" +
        "                        <div class=\"text-wrapper-5\" style=\"color: #1a1a1a; left: 8px;\">Salva</div>" +
        "                        <img src=\"../resources/img-home/bookmark-svgrepo-com%201salva.png\" style=\"width: 8.9px; top: 1.2px; height: 8.58px; position: relative; left: 31px;\">" +
        "                    </div>";

    element.removeAttribute('onclick');
    element.setAttribute('onclick', 'save(this)');

}
