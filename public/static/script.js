let btn_menu = document.querySelector('#menuBtn');
let side_bar = document.querySelector('.sideBarDiv');
let textos_menu = document.querySelectorAll('.nav_item span');
let btn_mobile = document.getElementById('btnMobile');


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
        btn_mobile.classList.remove('d-none');
        btn_menu.classList.replace('bi-x-lg', 'bi-list');
        textos_menu.forEach((span) => {
            span.classList.toggle('d-none');
        });
    }
})
    btn_mobile.addEventListener('click', () => {
    console.log(textos_menu);
    side_bar.classList.toggle('open');

    if (side_bar.classList.contains('open')) {
        btn_mobile.classList.add('d-none');
        btn_menu.classList.replace('bi-list', 'bi-x-lg');

        textos_menu.forEach((span) => {
            // Exemplo: removendo a classe d-none para mostrar o texto
            span.classList.remove('d-none');
        });
        
    } else {
        btn_mobile.classList.remove('d-none');
        btn_menu.classList.replace('bi-x-lg', 'bi-list');
        textos_menu.forEach((span) => {
            // Exemplo: removendo a classe d-none para mostrar o texto
            span.classList.toggle('d-none');
        });
    }
})

