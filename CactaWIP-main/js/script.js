const carregar = document.querySelector(".logo");

function Carregamento() {
    carregar.style.opacity = "0";

    setTimeout(() => {
        carregar.style.display = "none";
    }, 500)

}

