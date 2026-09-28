/* ========================================
   DADOS DOS PROJETOS
======================================== */

import imagemAgasalho from "../imagens/agasalho.jpg";
import imagemAlimento from "../imagens/alimento.jpg";
import imagemEducacao from "../imagens/educacao.jpg";
import imagemInclusao from "../imagens/inclusao.jpg";

const projetos = [
    {
        titulo: "Campanha do Agasalho",
        descricao:
            "Arrecadação de roupas e agasalhos para pessoas em situação de vulnerabilidade.",
        imagem: imagemAgasalho,
        alt: "Roupas e agasalhos arrecadados para doação",
        categoria: "Doações"
    },

    {
        titulo: "Alimento para Todos",
        descricao:
            "Campanha de arrecadação e distribuição de alimentos para famílias que precisam de apoio.",
        imagem: imagemAlimento,
        alt: "Doações de alimentos destinadas a famílias em situação de vulnerabilidade",
        categoria: "Alimentos"
    },

    {
        titulo: "Educação que Transforma",
        descricao:
            "Projeto com atividades educativas, reforço escolar e apoio para crianças e adolescentes.",
        imagem: imagemEducacao,
        alt: "Atividade educacional realizada com crianças",
        categoria: "Educação"
    },

    {
        titulo: "Inclusão Digital",
        descricao:
            "Projeto que promove inclusão e autonomia por meio do acesso à tecnologia.",
        imagem: imagemInclusao,
        alt: "Pessoas participando de uma atividade de inclusão digital",
        categoria: "Inclusão"
    }
];


/* ========================================
   TEMPLATE DOS CARDS
======================================== */

function criarCardProjeto(projeto) {
    return `
        <article class="card">

            <img
                src="${projeto.imagem}"
                alt="${projeto.alt}"
                class="imagem-card"
                loading="lazy"
            >

            <div class="conteudo-card">

                <span class="badge">
                    ${projeto.categoria}
                </span>

                <h3>
                    ${projeto.titulo}
                </h3>

                <p>
                    ${projeto.descricao}
                </p>

            </div>

        </article>
    `;
}


/* ========================================
   RENDERIZAÇÃO
======================================== */

export function renderizarProjetos() {
    const container =
        document.getElementById("listaProjetos");

    if (!container) {
        return;
    }

    container.innerHTML =
        projetos
            .map(criarCardProjeto)
            .join("");
}