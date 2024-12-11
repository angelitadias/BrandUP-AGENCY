// Código do Menu responsivo mobile
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

function login(){
    window.alert("Login efetuado!")
}