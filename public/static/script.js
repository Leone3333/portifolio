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

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formContato");
    const statusDiv = document.getElementById("statusForm");
    const btn = document.getElementById("btn_formulario");

    if (!form) {
        console.error("Formulário #formContato não foi encontrado na página.");
        return;
    }

    form.addEventListener("submit", async function (e) {
        e.preventDefault(); // Bloqueia o redirecionamento nativo do HTML

        btn.disabled = true;
        btn.innerText = "Enviando...";
        statusDiv.innerHTML = "";

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
                statusDiv.innerHTML = "<span style='color: green; font-weight: bold;'>Mensagem enviada com sucesso!</span>";
                form.reset();
            } else {
                statusDiv.innerHTML = "<span style='color: red;'>Erro ao enviar. Tente novamente.</span>";
            }
        } catch (error) {
            statusDiv.innerHTML = "<span style='color: red;'>Erro de rede ao tentar enviar.</span>";
        } finally {
            btn.disabled = false;
            btn.innerText = "Enviar";
        }
    });
});