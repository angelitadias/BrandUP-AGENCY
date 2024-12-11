function mostrarmenu() {
    // declaração da variável para manipulação
    
    let menu = document.getElementById('menu-mobile');
    // laço de condição para ajustar o menu
    if (menu.style.transform === 'scale(0)') {
        menu.style.transform = 'scale(1)';
    } else {
        menu.style.transform = 'scale(0)';
    }
    
}

function toggleAccessibilityMenu() {
    const menua = document.getElementById('accessibility-menu');
    menua.classList.toggle('show');
}

// Funções de acessibilidade (exemplo básico)
function aumentarTexto() {
    document.body.style.fontSize = "larger";
}

function diminuirTexto() {
    document.body.style.fontSize = "smaller";
}

function escalaCinza() {
    document.body.style.filter = "grayscale(100%)";
}

function altoContraste() {
    document.body.style.filter = "contrast(200%)";
}

function contrasteNegativo() {
    document.body.style.filter = "invert(100%)";
}

function luzCorFundo() {
    document.body.style.backgroundColor = "#00AAFA";
}

function linksSublinhados() {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.style.textDecoration = "underline";
    });
}

function fonteLegivel() {
    document.body.style.fontFamily = "Poppins";
}

function reiniciar() {
    document.body.style = "";
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.style.textDecoration = "none";
    });
}
