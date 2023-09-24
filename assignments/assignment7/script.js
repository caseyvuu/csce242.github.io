const toggleNav = () => {
    document.getElementById("menu-items").classList.toggle("hidden");
}

const showOne = () => {
    document.getElementById("exercise-one").classList.remove("hidden");
    document.getElementById("exercise-two").classList.add("hidden");
}

const showTwo = () => {
    document.getElementById("exercise-two").classList.remove("hidden");
    document.getElementById("exercise-one").classList.add("hidden");
}

const displayInput = () => {
    const nOne = document.getElementById("nameOne").value;
    const aOne = parseInt(document.getElementById("ageOne").value);
    const nTwo = document.getElementById("nameTwo").value;
    const aTwo = parseInt(document.getElementById("ageTwo").value);
    const nThree = document.getElementById("nameThree").value;
    const aThree = parseInt(document.getElementById("ageThree").value);
    
    let biggest = aOne;
    let middle = aTwo;
    let smallest = aThree;

    const error = document.getElementById("error-message");
    error.classList.add("hidden");

    const meat = document.getElementById("output");

    if(isNaN(aOne) || isNaN(aTwo) || isNaN(aThree)){
        error.classList.remove("hidden");
        error.innerHTML = "* Not a valid number";
    }
    if(nOne == "" || nTwo == "" || nThree == ""){
        error.classList.remove("hidden");
        error.innerHTML = "* Not a valid name input";
    }
    if(nOne == nTwo || nOne == nThree || nTwo == nThree){
        error.classList.remove("hidden");
        error.innerHTML = "* Not a valid name input";
    }

    if(aOne > aTwo && aOne > aThree){
        biggest = aOne;
    } else if (aTwo > aOne && aTwo >aThree){
        biggest = aTwo;
    } else {
        biggest = aThree;
    }

    if(aOne < aTwo && aOne < aThree){
        smallest = aOne;
    } else if (aTwo < aOne && aTwo < aThree){
        smallest = aTwo;
    } else {
        smallest = aThree;
    }

    if(aOne != biggest && aOne != smallest){
        middle = aOne;
    } else if(aTwo != biggest && aTwo != smallest){
        middle = aTwo;
    } else {
        middle = aThree;
    }
    
    meat.innerHTML += `<p>${biggest}, ${middle}, ${smallest}</p>`;
}

const displayTherm = () => {
    const fundAmt = parseInt(document.getElementById("funds").value);
    const root = document.querySelector(":root");

    const error = document.getElementById("error-two");
    error.classList.add("hidden");

    if(fundAmt < 0){
        error.classList.remove("hidden");
        error.innerHTML = "* Not a valid number";
    }

    if(fundAmt <= 4999 && fundAmt > 0){
        root.style.setProperty("--num", "25%")
    } else if(fundAmt <= 7499 && fundAmt > 0){
        root.style.setProperty("--num", "50%")
    } else if(fundAmt <= 9999 && fundAmt > 0){
        root.style.setProperty("--num", "75%")
    } else if (fundAmt == 10000 && fundAmt > 0){
        root.style.setProperty("--num", "100%")
    }
}

window.onload = () => {
    document.getElementById("menu-toggle").onclick = toggleNav;
    document.getElementById("compare-button").onclick = displayInput;
    document.getElementById("fund-button").onclick = displayTherm;
    document.getElementById("eOne").onclick = showOne;
    document.getElementById("eTwo").onclick = showTwo;
}