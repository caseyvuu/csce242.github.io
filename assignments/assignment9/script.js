const makeRainbow = () => {
    const rainbowButton = document.getElementById("rainbowButton");
    const rainbow = document.querySelector("#rainbow");
    const potOfGold = document.getElementById("potOfGold");

    let colors = ["red", "orange", "yellow", "green", "blue", "purple"];
    let position = 0;

    const updateRainbow = setInterval(() => {
        
        if(position == colors.length){
            potOfGold.classList.remove("hidden");
            clearInterval(updateRainbow);
        }

        const newColor = document.createElement("p")
        newColor.classList.add("rainbowStrip");
        newColor.style.setProperty("background", colors[position]);

        position++;
        rainbow.append(newColor);

    }, 10)
}

let quotes = ["Be yourself, everyone else is already taken - Oscar Wilde", 
"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe - Albert Einstein", 
"You only live once, but if you do it right, once is enough - Mae West",
"So many books, so little time - Frank Zappa",
"A room without books is like a body without a soul - Marcus Tullius Cicero"];

const quoteMethod = () => {
    const quoteText = document.querySelector("#quote-text");

    let quoteIndex = 0;

    const updateQuote = () => {
        console.log(quoteIndex);
        if(quoteIndex == quotes.length){
            quoteIndex = 0;
        }

        quoteText.innerHTML = quotes[quoteIndex];

        quoteIndex++;
    };

    updateQuote();

    setInterval(updateQuote, 2000);
}

window.onload = () => {
    document.getElementById("rainbowButton").onclick = makeRainbow;
    quoteMethod();
}