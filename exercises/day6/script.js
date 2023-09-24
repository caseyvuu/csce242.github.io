const bounceBall = () => {
    const ball = document.getElementById("ball");
    const bounceButton = document.getElementById("bounce-button");
    
    //if the ball is bouncing stop it!
    if(ball.classList.contains("bounce")){
        ball.classList.remove("bounce");
        bounceButton.innerHTML = "Start";
    } else {
        ball.classList.add("bounce");
        bounceButton.innerHTML = "Stop";
    }
};

/* Execute when the page loads */
window.onload = () => {
    document.getElementById("bounce-button").onclick = bounceBall;
};