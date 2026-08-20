let btn_menu = document.querySelector('#menuBtn');
let side_bar = document.querySelector('.sideBarDiv');
const textos_menu = document.querySelectorAll('.nav_item span');

btn_menu.addEventListener('click', () => {
    console.log(textos_menu);
    side_bar.classList.toggle('open');

    if (side_bar.classList.contains('open')) {
        btn_menu.classList.replace('bi-list', 'bi-x-lg');

        textos_menu.forEach((span) => {
            // Exemplo: removendo a classe d-none para mostrar o texto
            span.classList.remove('d-none');
        });
        
    } else {
        btn_menu.classList.replace('bi-x-lg', 'bi-list');
        textos_menu.forEach((span) => {
            // Exemplo: removendo a classe d-none para mostrar o texto
            span.classList.toggle('d-none');
        });
    }
})

const sideBar = () => {

}