import {
    salvarDados,
    buscarDados
} from "./storage.js";

const CHAVE_CONTRASTE = "conexaoSolidariaAltoContraste";


function atualizarBotao(botao, ativo) {
    botao.setAttribute(
        "aria-pressed",
        String(ativo)
    );

    if (ativo) {
        botao.setAttribute(
            "aria-label",
            "Desativar modo de alto contraste"
        );

        botao.textContent = "◐ Contraste ativo";
    } else {
        botao.setAttribute(
            "aria-label",
            "Ativar modo de alto contraste"
        );

        botao.textContent = "◐ Contraste";
    }
}


function aplicarContraste(ativo, botao) {
    document.body.classList.toggle(
        "alto-contraste",
        ativo
    );

    atualizarBotao(botao, ativo);
}


export function iniciarContraste() {
    const botao = document.getElementById("botaoContraste");

    if (!botao) {
        return;
    }

    const contrasteSalvo = buscarDados(
        CHAVE_CONTRASTE,
        false
    );

    aplicarContraste(contrasteSalvo, botao);


    botao.addEventListener("click", function () {
        const contrasteAtivo =
            !document.body.classList.contains("alto-contraste");

        aplicarContraste(
            contrasteAtivo,
            botao
        );

        salvarDados(
            CHAVE_CONTRASTE,
            contrasteAtivo
        );
    });
}