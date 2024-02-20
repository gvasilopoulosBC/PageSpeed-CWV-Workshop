async function load() {
  const response = await fetch("http://localhost:3030/scripts/data.json");
  const data = await response.json();
  data.forEach((item, i) => {
    const article = `
            <article>
                <img src="http://localhost:3030/images/${i}-500x300.jpg" alt="${item.title}">
                <h2>${item.title}</h2>
                <p>${item.description}</p>
                <button>More Info</button>
            </article>
        `;
    document.querySelector("main").innerHTML += article;
  });
}

window.onload = load;

function toggleMenu() {
  const menuList = document.getElementById("menuList");
  const menuicon = document.querySelector(".menu-icon");

  if (menuList.style.display === "none" || menuList.style.display === "") {
    menuicon.classList.add("open");
    fetchMenuItems();
    menuList.style.display = "block";
  } else {
    menuicon.classList.remove("open");
    menuList.style.display = "none";
  }
}

function fetchMenuItems() {
  const start = Date.now();
  while (Date.now() - start < 800) {
    // Performing a busy-wait loop
  }

  const menuItems = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

  const menuList = document.getElementById("menuList");
  const navbar = document.querySelector(".navbar");
  menuList.innerHTML = "";

  for (const element of menuItems) {
    let menuItem = document.createElement("div");
    menuItem.textContent = element;
    menuList.appendChild(menuItem);
  }
  navbar.appendChild(menuList);
}
