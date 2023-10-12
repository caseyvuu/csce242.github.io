const toggleNav = () => {
    document.getElementById("menu-items").classList.toggle("hidden");
}

const showAssignment = () => {
    document.getElementById("assignment-pg").classList.remove("hidden");
    document.getElementById("project-pg").classList.add("hidden");
}

const showProject = () => {
    document.getElementById("project-pg").classList.remove("hidden");
    document.getElementById("assignment-pg").classList.add("hidden");
}

window.onload = () => {
    document.getElementById("menu-toggle").onclick = toggleNav;
    document.getElementById("menu-assignment").onclick = showAssignment;
    document.getElementById("menu-project").onclick = showProject;
}