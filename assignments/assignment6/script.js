const showBatman = () => {
    document.getElementById("bat").classList.remove("hide");
}

const hideBatman = () => {
    document.getElementById("bat").classList.add("hide");
}

const squareDance = () => {
    document.getElementById("smooth-square").classList.add("dance");
};

const printReview = () => {
    document.getElementById("boxes").classList.add("decorator");
    
    const product = document.getElementById("product").value;
    const header = document.getElementById("add-name");

    const comment = document.getElementById("comment").value;
    const rate = document.getElementById("rate").value;

    const user = document.getElementById("user").value;

    header.innerHTML += `<section class = "separate"><strong>${product}</strong> <p class = "small">${rate} stars | ${comment}</p> <p class = "small">by ${user}</p></section>`;
};

window.onload = () => {
    document.getElementById("button-show").onclick = showBatman;
    document.getElementById("button-hide").onclick = hideBatman;
    document.getElementById("dance-button").onclick = squareDance;
    document.getElementById("add-button").onclick = printReview;
}