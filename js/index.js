// https://ddragon.leagueoflegends.com/cdn/13.18.1/img/champion/< Nombre del champion >
import Campeon from "./campeones.js";

var campeones = [];

const button = document.querySelector('button');
const campeonesDiv = document.getElementById('campeones');

button.addEventListener('click', async () => {
    document.querySelector('#button').style.visibility = 'hidden';
    
    // También cambiamos la visibilidad del elemento #pokedex, y lo mostramos en pantalla
    document.querySelector('#campeones').style.visibility = 'visible';
    
    startChampions();
});

const startChampions = async () => {

    await fetch('https://ddragon.leagueoflegends.com/cdn/13.18.1/data/en_US/champion.json').then(function(result){
        return result.json();
    }).then(function(result){
        const data = result;
        const campeon = new Campeon(data);
        pushCampeon(campeon);
    });


        
}

function pushCampeon(campeon){
    campeones.push(campeon);
}

const showCampeon = async () => {
    const campeonesDiv = document.getElementById('campeones');
    for(var i = 0; i < campeones.length; i++) {
    campeonesDiv.innerHTML +=  `<div class="card">
                                
                                    <img class="front" src="${campeones[i].imageUrl}"><br>
                                    ${campeones[i].name}<br>
                                
                                   
                                </div>`
    }
}