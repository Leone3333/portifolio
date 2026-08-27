let btn_menu = document.querySelector('#menuBtn');
let side_bar = document.querySelector('.sideBarDiv');
let textos_menu = document.querySelectorAll('.nav_item span');
let btn_mobile = document.getElementById('btnMobile');
let form = document.getElementById("formContato");
let statusDiv = document.getElementById('statusForm');
let btn_formulario = document.getElementById('btn_formulario');

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

form.addEventListener('submit', async function (e) {
    e.preventDefault(); // Impede o redirecionamento padrão do navegador

    btn_formulario.disable = true
    btn_formulario.innerText = 'Enviando...'
    statusDiv.innerHTML = "";

    const data = new FormData(form)

    try {

        const responde = await fetch(form.action, { method: form.method, body: data, headers: { 'Accept': 'application/json' } })


        if (responde.ok) {
            statusDiv.innerHTML = "<span style='color:green;'>Email enviado com sucesso!</span>";
        } else {
            statusDiv.innerHTML = "<span style='color:red;'>Ocorreu um erro no envio do email :( por favor tente contato pelo linkdn</span>";
        }
    } catch (error) {
        statusDiv.innerHTML = "<span style='color:red;'>Ocorreu um erro de conexão :( por favor tente contato pelo linkdn</span>";
    } finally {
        btn_formulario.disable = false
        btn_formulario.innerText = 'Enviar'
    }
})