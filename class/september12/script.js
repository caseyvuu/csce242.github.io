// /*basically it's saying make this constant equal to this function (everything after the = sign) */
// const loadFunction = () => {
//     const helloP = document.getElementById("date");
//     helloP.innerHTML = "hi";
// }
// /*when the window is loaded, execute the function that does all the things inside of here*/
// window.onload = () => {
//     const helloP = document.getElementById("date");
//     helloP.innerHTML = "hi";
// }

const changeText = () => {
    const helloP = document.getElementById("date");
    helloP.innerHTML = "hi, to you, Casey";
    helloP.classList.add("special");
}

const showJasper = () => {
    document.getElementById("jasper").classList.remove("hide");
}
const hideJasper = () => {
    document.getElementById("jasper").classList.add("hide");
}

window.onload = () => {
    //get button, tie functino to clickage
    document.getElementById("button-click").onclick = changeText;
    document.getElementById("button-show").onclick = showJasper;
    document.getElementById("button-hide").onclick = hideJasper;
}