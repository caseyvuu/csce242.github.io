class Toy {
    constructor(name, price, age, rating, image){
        this.name = name;
        this.price = price;
        this.age = age;
        this.rating = rating;
        this.image = image;
    }

    getDetails() {
        return `${this.name} ${this.price} ${this.age} ${this.rating}`;
    }

    getToyItem() {
        const sectionOne = document.createElement("section");
        sectionOne.classList.add("toy-styling");

        const img = document.createElement("img");
        sectionOne.append(img);
        img.src = this.image;

        const information = document.createElement("section");
        const h3 = document.createElement("h3");
        const price = document.createElement("p");
        const age = document.createElement("p");
        const rating = document.createElement("p");
        h3.innerHTML = this.name;
        price.innerHTML = this.price;
        age.innerHTML = this.age;
        rating.innerHTML = this.rating;
        information.append(h3);
        information.append(price);
        information.append(age);
        information.append(rating);
        information.classList.add("hidden");
        information.classList.add("positioning");
        
        sectionOne.append(information);

        sectionOne.onmouseover = () => {
            img.classList.add("changeOpacity");
            information.classList.remove("hidden");
        }

        sectionOne.onmouseout = () => {
           img.classList.remove("changeOpacity");
           information.classList.add("hidden");
        }

        return sectionOne;
    }
}

const showToys = () => {
    
    const toys = [];
    toys.push(new Toy("The Flash", "Price: $19.99", "Age Range: 3+", "Rating: 5 stars", "images/actionfigure.png"));
    toys.push(new Toy("Toy Box Robots", "Price: $24.99", "Age Range: 8+", "Rating: 3 stars", "images/fighters.png"));
    toys.push(new Toy("Lincoln Logs", "Price: $28.99", "Age Range: 7+", "Rating: 4 stars", "images/logs.png"));
    toys.push(new Toy("Nerf Gun", "Price: $22.99", "Age Range: 10+", "Rating: 3.5 stars", "images/nerf.png"));
    toys.push(new Toy("Penguin Stuffed Animal", "Price: $14.99", "Age Range: 0+", "Rating: 5 stars", "images/penguin.png"));
    toys.push(new Toy("Soccer Ball", "Price: $10.00", "Age Range: 5+", "Rating: 3.5 stars", "images/soccer.png"));

    const mainSection = document.getElementById("main");
    toys.forEach(toy => {
        mainSection.append(toy.getToyItem());
    });
}

window.onload = () => {
    showToys();
}