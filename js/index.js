// https://ddragon.leagueoflegends.com/cdn/13.18.1/img/champion/< Nombre del champion >
import { Campeon } from './campeones.js';


const button = document.getElementById('button');
const campeonesDiv = document.getElementById('campeones');

button.addEventListener('click', async () => {
    button.style.visibility = "hidden";
    const response = await fetch('https://ddragon.leagueoflegends.com/cdn/13.18.1/data/en_US/champion.json');
    const data = await response.json();
    
    campeonesDiv.innerHTML = '';

    // Obtener los datos de los campeones
    const champions = data.data;

    
    for (let championName in champions) {
        const champion = champions[championName];
        const imageUrl = `https://ddragon.leagueoflegends.com/cdn/13.18.1/img/champion/${champion.image.full}`;

       
        const campeonInstance = new Campeon(championName, imageUrl);

       
        campeonesDiv.appendChild(campeonInstance.render());
    }
});