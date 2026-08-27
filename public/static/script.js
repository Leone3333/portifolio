let btn_menu = document.querySelector('#menuBtn');
let side_bar = document.querySelector('.sideBarDiv');
let textos_menu = document.querySelectorAll('.nav_item span');
let btn_mobile = document.getElementById('btnMobile');
// let form = document.getElementById("formContato");
// let statusDiv = document.getElementById('statusForm');
// let btn_formulario = document.getElementById('btn_formulario');

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

async function enviarFormulario(event) {
    event.preventDefault(); // MÁXIMA PRIORIDADE: Cancela o envio nativo na hora!

    const form = event.target;
    const btn = document.getElementById("btn_formulario");
    const statusDiv = document.getElementById("statusForm");

    if (btn) {
        btn.disabled = true;
        btn.innerText = "Enviando...";
    }
    if (statusDiv) statusDiv.innerHTML = "";

    const data = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            if (statusDiv) statusDiv.innerHTML = "<span style='color: #00ff7f; font-weight: bold;'>Mensagem enviada com sucesso!</span>";
            form.reset();
        } else {
            if (statusDiv) statusDiv.innerHTML = "<span style='color: #ff4d4d;'>Erro ao enviar. Tente novamente.</span>";
        }
    } catch (error) {
        if (statusDiv) statusDiv.innerHTML = "<span style='color: #ff4d4d;'>Erro de conexão ao enviar.</span>";
    } finally {
        if (btn) {
            btn.disabled = false;
            btn.innerText = "Enviar";
        }
    }
}