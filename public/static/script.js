document.addEventListener("DOMContentLoaded", function () {

    // === LÓGICA DO MENU SIDEBAR ===
    let btn_menu = document.querySelector('#menuBtn');
    let side_bar = document.querySelector('.sideBarDiv');
    let textos_menu = document.querySelectorAll('.nav_item span');
    let btn_mobile = document.getElementById('btnMobile');

    if (btn_menu && side_bar) {
        btn_menu.addEventListener('click', () => {
            side_bar.classList.toggle('open');

            if (side_bar.classList.contains('open')) {
                btn_menu.classList.replace('bi-list', 'bi-x-lg');
                textos_menu.forEach((span) => span.classList.remove('d-none'));
            } else {
                if (btn_mobile) btn_mobile.classList.remove('d-none');
                btn_menu.classList.replace('bi-x-lg', 'bi-list');
                textos_menu.forEach((span) => span.classList.toggle('d-none'));
            }
        });
    }

    if (btn_mobile && side_bar) {
        btn_mobile.addEventListener('click', () => {
            side_bar.classList.toggle('open');

            if (side_bar.classList.contains('open')) {
                btn_mobile.classList.add('d-none');
                if (btn_menu) btn_menu.classList.replace('bi-list', 'bi-x-lg');
                textos_menu.forEach((span) => span.classList.remove('d-none'));
            } else {
                btn_mobile.classList.remove('d-none');
                if (btn_menu) btn_menu.classList.replace('bi-x-lg', 'bi-list');
                textos_menu.forEach((span) => span.classList.toggle('d-none'));
            }
        });
    }

    // === LÓGICA DO FORMULÁRIO DE CONTATO (FORMSPREE VIA FETCH) ===
    const form = document.getElementById("formContato");
    const statusDiv = document.getElementById("statusForm");
    const btn = document.getElementById("btn_formulario");

    if (form) {
        form.addEventListener("submit", async function (e) {
            e.preventDefault(); // Impede o redirecionamento nativo para a página do Formspree

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
                    if (statusDiv) statusDiv.innerHTML = "<span style='color: green; font-weight: bold;'>Mensagem enviada com sucesso!</span>";
                    form.reset();
                } else {
                    if (statusDiv) statusDiv.innerHTML = "<span style='color: red;'>Erro ao enviar. Tente novamente.</span>";
                }
            } catch (error) {
                if (statusDiv) statusDiv.innerHTML = "<span style='color: red;'>Erro de rede ao tentar enviar.</span>";
            } finally {
                if (btn) {
                    btn.disabled = false;
                    btn.innerText = "Enviar";
                }
            }
        });
    } else {
        console.error("Formulário #formContato não foi encontrado na página.");
    }
});