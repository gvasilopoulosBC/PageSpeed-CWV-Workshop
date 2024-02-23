async function loadArticles() {
  const response = await fetch("http://localhost:3030/scripts/data.json");
  const data = await response.json();
  // 1)webp file formats
  // 2)loading=lazy to reduce network request
  // 3)dimensions to improve CLS
  data.forEach((item, i) => {
    const article = `
            <article>
                <img src="http://localhost:3030/images/${i}-500x300.webp"
                 width="500" height="300" loading="lazy"
                  alt="${item.title}"> 
                <h2>${item.title}</h2>
                <p>${item.description}</p>
                <button>More Info</button>
            </article>
        `;
    document.querySelector("main").innerHTML += article;
  });
}
// 4)helps FCP metric
window.addEventListener("DOMContentLoaded", loadArticles);

function toggleMenu() {
  const menuList = document.getElementById("menuList");
  const menuicon = document.querySelector(".menu-icon");

  if (menuList.style.display === "none" || menuList.style.display === "") {
    menuicon.classList.add("open");
    // 5)Not fetch elements on user action helps INP
    // fetchMenuItems();
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
