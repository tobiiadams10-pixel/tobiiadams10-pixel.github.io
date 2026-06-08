const boton = document.querySelector(".hamburguesa");
const menu = document.querySelector(".nav-links");
 const contenedor = document.querySelector(".nav-container");

boton.addEventListener("click", () => {
    contenedor.classList.toggle("abierto");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
});