const navMenu = document.getElementById("nav_menu");
const menuPainel = document.querySelector("menu");

navMenu.addEventListener("click", () => {
    const abrir = menuPainel.classList.toggle("active");
    navMenu.classList.toggle("bi-list", !abrir);
    navMenu.classList.toggle("bi-x", abrir);
});

document.querySelectorAll("menu a").forEach(link => {
    link.addEventListener("click", () => {
        menuPainel.classList.remove("active");
        navMenu.classList.add("bi-list");
        navMenu.classList.remove("bi-x");
    });
});