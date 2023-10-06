const toggleNav = () => {
    document.getElementById("menu-items").classList.toggle("hidden");
}

const dropdownButton = document.querySelector('#dropdown-button');
const dropdownChoices = document.querySelector('#dropdown-choices');

dropdownButton.addEventListener('click', () => {
    dropdownChoices.style.display = (dropdownChoices.style.display === 'block') ? 'none' : 'block';
});

window.addEventListener('click', (event) => {
    if (!event.target.matches('#dropdown-button')) {
        dropdownChoices.style.display = 'none';
    }
});

const printReview = () => {
    
    const comment = document.getElementById("comment").value;
    const header = document.getElementById("add-name");

    const name = document.getElementById("name").value;
    const rate = document.getElementById("rate").value;

    const user = document.getElementById("user").value;

    header.innerHTML += `<section class = "separate"><strong>${product}</strong> <p class = "small">${rate} stars | ${comment}</p> <p class = "small">by ${user}</p></section>`;
};

window.onload = () => {
    document.getElementById("menu-toggle").onclick = toggleNav;
}