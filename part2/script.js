const toggleNav = () => {
    document.getElementById("menu-items").classList.toggle("hidden");
}

window.onload = () => {
    document.getElementById("menu-toggle").onclick = toggleNav;
}