const toggleNav = () => {
    document.getElementById("menu-items").classList.toggle("hidden");
}

const submitContactForm = (e) => {
    e.preventDefault();
    
    const form = document.getElementById("contact-form");
    const name = form.elements["contact-name"].value;
    const email = form.elements["contact-email"].value;
    const message = form.elements["contact-message"].value;

    console.log(name);
    console.log(email);
    console.log(message);
}

const showContactResult = async (e) => {
    e.preventDefault();
    const result = document.getElementById("contact-result");
    let response = await getContactResult();
    if (response.status == 200) {
      result.innerHTML = "Email Successfully Sent";
    } else {
      result.innerHTML = "Sorry, your email was not sent.";
    }
  };
  
const getContactResult = async (e) => {
    const form = document.getElementById("contact-form");
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const result = document.getElementById("contact-result");
    result.innerHTML = "Please wait...";
  
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      return response;
    } catch (error) {
      console.log(error);
      document.getElementById("contact-result").innerHTML =
        "Sorry your email couldn't be sent";
    }
  };

const submitReviewForm = (e) => {
    e.preventDefault();
    
    const form = document.getElementById("review-form");
    const message = form.elements["review-message"].value;
    const name = form.elements["review-name"].value;
    const email = form.elements["review-email"].value;

    console.log(message);
    console.log(name);
    console.log(email);
}

const showReviewResult = async (e) => {
    e.preventDefault();
    const result = document.getElementById("review-result");
    let response = await getReviewResult();
    if (response.status == 200) {
      result.innerHTML = "Review Successfully Sent";
    } else {
      result.innerHTML = "Sorry, your review was not sent.";
    }
};
  
const getReviewResult = async (e) => {
    const form = document.getElementById("review-form");
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const result = document.getElementById("review-result");
    result.innerHTML = "Please wait...";
  
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      return response;
    } catch (error) {
      console.log(error);
      document.getElementById("review-result").innerHTML =
        "Sorry your review couldn't be sent";
    }
};

const getMenu = async () => {
    const url = "https://caseyvuu.github.io/part5/menu.json";
    
    try {
      const link = await fetch(url);
      return await link.json();
    } catch (error) {
      console.log(error);
    }
};
  
  const showMenuItems = async () => {
    let items = await getMenu();
    let itemsSection = document.getElementById("menu-content");

    items.forEach((item) => {
      itemsSection.appendChild(createMenuItemElement(item));
    });
};
  
  const createMenuItemElement = (item) => {
    const menuItemElement = document.createElement("div");
    menuItemElement.classList.add("menu-padding", "menu-style");

    const section1 = document.createElement("section");

    const h3 = document.createElement("h3");
    h3.innerText = item.name;
    const p = document.createElement("p");
    p.textContent = item.description;
    section1.appendChild(h3);
    section1.appendChild(p);
    
    const section2 = document.createElement("section");

    const img = document.createElement("img");
    img.src = item.image;
    section2.appendChild(img);
    
    menuItemElement.appendChild(section1);
    menuItemElement.appendChild(section2);
    
    return menuItemElement;
};

window.onload = () => {
    document.getElementById("menu-toggle").onclick = toggleNav;
    showMenuItems();
    reviewMethod();
    document.getElementById("contact-form").onsubmit = async function (e) {
        e.preventDefault();
        submitContactForm(e);
        await showContactResult(e);
    };
    document.getElementById("review-form").onsubmit = async function (e) {
        e.preventDefault();
        submitReviewForm(e);
        await showReviewResult(e);
    };
}