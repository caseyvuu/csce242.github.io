const toggleNav = () => {
    document.getElementById("menu-items").classList.toggle("hidden");
}

const getMenu = async () => {
  const url = "https://caseyvuu.github.io/test/menu1.json";

  try {
    const link = await fetch(url); 
    console.log(link); 
    return await link.json();
  } catch (error) {
    console.log(error);
  }
};

const showMenuItems = async () => {
  let itemsData = await getMenu();
  let items = itemsData.menu;

  let itemsSection = document.getElementById("menu-content");

  items.forEach((item) => {
    itemsSection.appendChild(createMenuItemElement(item));
  });
};

const createMenuItemElement = (item) => {
  const menuItemElement = document.createElement("div");
  menuItemElement.classList.add("menu-item");

  const h3 = document.createElement("h3");
  h3.innerText = item.name;

  const p = document.createElement("p");
  p.textContent = item.description;

  const img = document.createElement("img");
  img.src = item.image;

  menuItemElement.appendChild(h3);
  menuItemElement.appendChild(p);
  menuItemElement.appendChild(img);

  return menuItemElement;
};

window.onload = () => {
    document.getElementById("menu-toggle").onclick = toggleNav;
    showMenuItems();
}