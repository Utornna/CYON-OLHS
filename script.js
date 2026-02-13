function toggleMenu() {
    const menu = document.getElementById("menu");
    const overlay = document.getElementById("overlay");
    menu.classList.toggle("show");
    overlay.classList.toggle("show");
}

function closeMenu() {
    const menu = document.getElementById("menu");
    const overlay = document.getElementById("overlay");
    menu.classList.remove("show");
    overlay.classList.remove("show");
}
