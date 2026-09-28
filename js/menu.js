export function iniciarMenu() {
    const menuHamburguer = document.getElementById("menuHamburguer");
    const menuPrincipal = document.getElementById("menuPrincipal");

    if (!menuHamburguer || !menuPrincipal) {
        return;
    }

    menuHamburguer.addEventListener("click", function () {
        menuPrincipal.classList.toggle("ativo");

        const menuAberto = menuPrincipal.classList.contains("ativo");

        menuHamburguer.setAttribute(
            "aria-expanded",
            String(menuAberto)
        );

        if (menuAberto) {
            menuHamburguer.textContent = "✕";

            menuHamburguer.setAttribute(
                "aria-label",
                "Fechar menu de navegação"
            );
        } else {
            menuHamburguer.textContent = "☰";

            menuHamburguer.setAttribute(
                "aria-label",
                "Abrir menu de navegação"
            );
        }
    });
}