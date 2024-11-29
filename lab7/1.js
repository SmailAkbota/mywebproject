const apiUrl = "https://akabab.github.io/superhero-api/api";

// Function to generate a random ID (from 1 to 731)
function getRandomId() {
  return Math.floor(Math.random() * 731) + 1;
}

// Async function to fetch and display data of a random superhero
async function getRandomSuperhero() {
  const randomId = getRandomId();
  try {
    const response = await fetch(`${apiUrl}/id/${randomId}.json`);
    const heroData = await response.json();


    const heroInfoHtml = `
      <h2>${heroData.name}</h2>
      <img src="${heroData.images.lg}" alt="${heroData.name}" style="width: 200px; height: auto;">
      <p><strong>Intelligence:</strong> ${heroData.powerstats.intelligence}</p>
      <p><strong>Strength:</strong> ${heroData.powerstats.strength}</p>
      <p><strong>Speed:</strong> ${heroData.powerstats.speed}</p>
      <p><strong>Durability:</strong> ${heroData.powerstats.durability}</p>
      <p><strong>Power:</strong> ${heroData.powerstats.power}</p>
      <p><strong>Combat:</strong> ${heroData.powerstats.combat}</p>
      <p><strong>Gender:</strong> ${heroData.appearance.gender}</p>
      <p><strong>Race:</strong> ${heroData.appearance.race}</p>
      <p><strong>Height:</strong> ${heroData.appearance.height[1]}</p>
      <p><strong>Weight:</strong> ${heroData.appearance.weight[1]}</p>
    `;

 
    document.getElementById("heroInfo").innerHTML = heroInfoHtml;
  } catch (error) {
    console.error("Error fetching hero data:", error);
    document.getElementById("heroInfo").innerHTML = "<p>Failed to load hero data.</p>";
  }
}