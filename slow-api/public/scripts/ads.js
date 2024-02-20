async function load() {
  await new Promise((resolve) => setTimeout(resolve, 2200));
  const adContainer = document.getElementById("ad1");

  if (adContainer) {
    const adElement = document.createElement("div");
    adElement.innerHTML = '<img src="https://placehold.co/300x300" alt="Ad">';
    adContainer.appendChild(adElement);
  }
}
load();
