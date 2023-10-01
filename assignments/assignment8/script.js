const runPlease = () => {
    const img = document.getElementById("runner");

    let count = 0;
    
    const interval = setInterval(() => {
        
        img.src="images/walking.png";
        
        count++;
        img.style.setProperty("--goLeft", + count + "px");

        if(count%2 == 0){
            img.src="images/running.png";
        }

        if(count == 300){
            clearInterval(interval);
        }
    }, 10);
};

const displayTherm = () => {
    const donations = parseInt(document.getElementById("funds").value);
    const root = document.querySelector(":root");

    const error = document.getElementById("error");
    error.classList.add("hidden");
    if(donations < 0 && donations > 10000){
        error.classList.remove("hidden");
        error.innerHTML = "* Not a valid number";
    }

    let count = 0;

    const interval = setInterval(() => {
        
        if(donations/10000*100 <= count){
            clearInterval(interval);
        } else {
            count++;
            root.style.setProperty("--percentage", + count + "%");
        }
    }, 10);
}

window.onload = () => {
    document.getElementById("donation-button").onclick = displayTherm;
    document.getElementById("runner").onclick = runPlease;
}