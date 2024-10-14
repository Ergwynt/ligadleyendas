import Campeon from "./campeones.js";

var campeones = [];

// Elementos del html
const button = document.querySelector('button');
const campeonesDiv = document.getElementById('campeones');
const modal = document.getElementById('modal');
const closeModal = document.querySelector('.close');

// Elementos dentro del modal
const championImage = document.getElementById('championImage'); // Imagen del campeón
const championName = document.getElementById('championName');
const championTitle = document.getElementById('championTitle');
const championDescription = document.getElementById('championDescription');
const championrol = document.getElementById('championrol');
const championtype = document.getElementById('type');

button.addEventListener('click', async () => {
    document.querySelector('#button').style.visibility = 'hidden';
    document.querySelector('#campeones').style.visibility = 'visible';
    
    await startChampions();
    showCampeon();
});

// guarda todos los campeones en el array campeones
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

// Muestra los campeones en la web
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

    // Añado un evento de clic a cada campeón para ver mas información del mismo
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            const index = e.currentTarget.getAttribute('data-index');
            openModal(campeones[index]);
        });
    });
}

// Funcion para abrir el modal con la información del campeon
function openModal(campeon) {

    // Si el campeón es Heimerdinger, cambia el nombre a "Jaime Enrique" si no pone el nombre del campeon en cuestion
    if (campeon.name === "Heimerdinger") {
        championName.textContent = "Jaime Enrique";
    } else {
        championName.textContent = campeon.name;
    }
    
    // Asigna el resto de valores imagen, descripcion etc.
    championImage.src = campeon.completa;
    championTitle.textContent = campeon.title;
    championDescription.textContent = campeon.description;
    championrol.textContent = `Roles: ${campeon.roles.join(', ')}`;
    championtype.textContent = `Champion use: ${campeon.type}`;
    
    // Muestra el modal
    modal.style.display = 'block';
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