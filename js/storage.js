/* ========================================
   FUNÇÕES DE LOCALSTORAGE
======================================== */

export function salvarDados(chave, valor) {
    localStorage.setItem(
        chave,
        JSON.stringify(valor)
    );
}

export function buscarDados(chave, valorPadrao = null) {
    const dados = localStorage.getItem(chave);

    if (dados === null) {
        return valorPadrao;
    }

    try {
        return JSON.parse(dados);
    } catch (erro) {
        console.error(
            "Erro ao recuperar dados do localStorage:",
            erro
        );

        return valorPadrao;
    }
}

export function removerDados(chave) {
    localStorage.removeItem(chave);
}