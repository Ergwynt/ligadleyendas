// https://ddragon.leagueoflegends.com/cdn/13.18.1/img/champion/< Nombre del champion >
import { Campeon } from './campeones.js';

// Select the button and the div where we will display the champions
const button = document.getElementById('button');
const campeonesDiv = document.getElementById('campeones');

// Add an event listener for the button click
button.addEventListener('click', async () => {
    // Fetch the list of champions from the API
    const response = await fetch('https://ddragon.leagueoflegends.com/cdn/13.18.1/data/en_US/champion.json');
    const data = await response.json();
    
    // Clear any previous content in the campeonesDiv
    campeonesDiv.innerHTML = '';

    // Get the champion data
    const champions = data.data;

    // Loop through each champion and create a new Campeon instance
    for (let championName in champions) {
        const champion = champions[championName];
        const imageUrl = `https://ddragon.leagueoflegends.com/cdn/13.18.1/img/champion/${champion.image.full}`;

        // Create a new Campeon object
        const campeonInstance = new Campeon(championName, imageUrl);

        // Render the champion and append to the campeonesDiv
        campeonesDiv.appendChild(campeonInstance.render());
    }
});