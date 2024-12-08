document.addEventListener("DOMContentLoaded", function () {
    const botonBurguer = document.querySelector(".boton-burguer");
    const nav = document.querySelector("nav");

    const lis = document.querySelectorAll("nav ul li");

    lis.forEach(function (li) {
        li.addEventListener("click", function () {
            nav.classList.remove("active");
            botonBurguer.classList.remove("active");
        });
    });

    botonBurguer.addEventListener("click", function () {
        nav.classList.toggle("active");
        botonBurguer.classList.toggle("active");
    });

    // Si no le da click al burguer, se cierra el nav
    document.addEventListener("click", function (e) {
        if (!botonBurguer.contains(e.target)) {
            nav.classList.remove("active");
            botonBurguer.classList.remove("active");
        }
    });
});