import Campeon from "./campeones.js";

var campeones = [];

const button = document.querySelector('button');
const campeonesDiv = document.getElementById('campeones');
const modal = document.getElementById('modal');
const closeModal = document.querySelector('.close');

// Elementos dentro del modal
const championImage = document.getElementById('championImage'); // Imagen del campeón
const championName = document.getElementById('championName');
const championTitle = document.getElementById('championTitle');
const championDescription = document.getElementById('championDescription');

button.addEventListener('click', async () => {
    document.querySelector('#button').style.visibility = 'hidden';
    document.querySelector('#campeones').style.visibility = 'visible';
    
    await startChampions();
    showCampeon();
});

const startChampions = async () => {
    await fetch('https://ddragon.leagueoflegends.com/cdn/13.18.1/data/en_US/champion.json')
    .then(response => response.json())
    .then(result => {
        Object.keys(result.data).forEach(championKey => {
            const campeonData = result.data[championKey];
            const campeon = new Campeon(campeonData);
            pushCampeon(campeon);
        });
    });
}

function pushCampeon(campeon) {
    campeones.push(campeon);
}

// Mostrar los campeones en pantalla
const showCampeon = () => {
    campeonesDiv.innerHTML = ''; 
    campeones.forEach((campeon, index) => {
        if (campeon.name == "Heimerdinger"){
            const cardHTML = `
            <div class="card" data-index="${index}">
            <strong>Jaime Enrique</strong><br>
                <img class="front" src="${campeon.imageUrl}" alt="${campeon.id}"><br>
                
                <br><br>
               <div class="titulo"> ${campeon.title} </div>
            </div>
        `;
        campeonesDiv.innerHTML += cardHTML;
        }else{
            const cardHTML = `
            <div class="card" data-index="${index}">
            <div><strong>${campeon.name}</div></strong><br>
            
                <img class="front" src="${campeon.imageUrl}" alt="${campeon.id}"><br>
                <br>
               <div class="titulo"> ${campeon.title} </div>
            </div>
        `;
        campeonesDiv.innerHTML += cardHTML;
        }
        
        
    });

    // Añado evento de clic a cada campeón para ver mas información del mismo
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            const index = e.currentTarget.getAttribute('data-index');
            openModal(campeones[index]);
        });
    });
}

// Función para abrir el modal con la información del campeón
function openModal(campeon) {
    
    if (campeon.name == "Heimerdinger"){
        championName.textContent = "Jaime Enrique"
        championImage.src = campeon.completa; 
        championTitle.textContent = campeon.title;
        championDescription.textContent = campeon.description;
        
        modal.style.display = 'block'; // Muestra el modal
    } else{
        championName.textContent = campeon.name;
        championImage.src = campeon.completa; 
        championTitle.textContent = campeon.title;
        championDescription.textContent = campeon.description;
    
        modal.style.display = 'block'; // Muestra el modal
    }
}

// Función para cerrar el modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Se cierra la ventana modal si se da click en la x o en cualquier lado fuera del mismo
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});