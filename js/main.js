import { iniciarMenu } from "./menu.js";
import { iniciarFormulario } from "./validacao.js";
import { renderizarProjetos } from "./templates.js";
import { iniciarContraste } from "./contraste.js";


document.addEventListener("DOMContentLoaded", function () {
    iniciarMenu();
    iniciarFormulario();
    renderizarProjetos();
    iniciarContraste();
});