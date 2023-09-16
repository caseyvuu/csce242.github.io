const bounceBall = () => {
    let ball = document.getElementById("ball");
    ball.classList.add("bounce");
};

/* When the user clicks the button their name is written to a paragraph */
const writeMessage = () => {
    const firstName = document.getElementById("txt-first-name").value;
    const messageP = document.getElementById("message");

    messageP.innerHTML = "Hello" + firstName;
};

/* Execute when the page loads */
window.onload = () => {
    document.getElementById("bounce-button").onclick = bounceBall;
    document.getElementById("message-button").onclick = writeMessage;
};

