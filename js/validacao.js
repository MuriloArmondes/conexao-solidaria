/* ========================================
   MÁSCARAS DOS CAMPOS
======================================== */

function aplicarMascaraCPF(campo) {
    let valor = campo.value.replace(/\D/g, "");

    valor = valor.slice(0, 11);
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    campo.value = valor;
}


function aplicarMascaraTelefone(campo) {
    let valor = campo.value.replace(/\D/g, "");

    valor = valor.slice(0, 11);
    valor = valor.replace(/^(\d{2})(\d)/, "($1) $2");
    valor = valor.replace(/(\d{5})(\d{4})$/, "$1-$2");

    campo.value = valor;
}


function aplicarMascaraCEP(campo) {
    let valor = campo.value.replace(/\D/g, "");

    valor = valor.slice(0, 8);
    valor = valor.replace(/(\d{5})(\d)/, "$1-$2");

    campo.value = valor;
}


/* ========================================
   FEEDBACK DO FORMULÁRIO
======================================== */

function mostrarToast() {
    const toast = document.getElementById("toast");

    if (!toast) {
        return;
    }

    toast.classList.add("ativo");

    setTimeout(function () {
        toast.classList.remove("ativo");
    }, 4000);
}


/* ========================================
   INICIALIZAÇÃO
======================================== */

export function iniciarFormulario() {
    const formulario = document.getElementById("formCadastro");

    const cpf = document.getElementById("cpf");
    const telefone = document.getElementById("telefone");
    const cep = document.getElementById("cep");

    if (cpf) {
        cpf.addEventListener("input", function () {
            aplicarMascaraCPF(cpf);
        });
    }

    if (telefone) {
        telefone.addEventListener("input", function () {
            aplicarMascaraTelefone(telefone);
        });
    }

    if (cep) {
        cep.addEventListener("input", function () {
            aplicarMascaraCEP(cep);
        });
    }

    if (!formulario) {
        return;
    }


    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!formulario.checkValidity()) {
            formulario.reportValidity();
            return;
        }

        mostrarToast();

        formulario.reset();

        console.log("Formulário validado com sucesso.");
    });
}