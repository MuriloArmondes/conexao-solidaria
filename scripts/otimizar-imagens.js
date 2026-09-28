import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const pastaImagens = "./imagens";

const imagens = [
    "agasalho.jpg",
    "alimento.jpg",
    "educacao.jpg",
    "inclusao.jpg"
];

async function otimizarImagens() {
    let tamanhoOriginal = 0;
    let tamanhoWebP = 0;

    for (const imagem of imagens) {
        const caminhoOriginal = path.join(pastaImagens, imagem);

        const nomeWebP =
            path.parse(imagem).name + ".webp";

        const caminhoWebP =
            path.join(pastaImagens, nomeWebP);

        const dadosOriginais =
            fs.statSync(caminhoOriginal);

        tamanhoOriginal += dadosOriginais.size;

        await sharp(caminhoOriginal)
            .webp({
                quality: 80
            })
            .toFile(caminhoWebP);

        const dadosWebP =
            fs.statSync(caminhoWebP);

        tamanhoWebP += dadosWebP.size;

        console.log(
            `${imagem} -> ${nomeWebP}`
        );
    }

    const reducao =
        ((tamanhoOriginal - tamanhoWebP) /
            tamanhoOriginal) *
        100;

    console.log("\nOtimização concluída!");

    console.log(
        `Tamanho original: ${(tamanhoOriginal / 1024).toFixed(2)} KB`
    );

    console.log(
        `Tamanho WebP: ${(tamanhoWebP / 1024).toFixed(2)} KB`
    );

    console.log(
        `Redução total: ${reducao.toFixed(2)}%`
    );
}

otimizarImagens().catch(console.error);