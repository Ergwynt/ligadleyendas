export class Campeon {
    constructor(name, imageUrl) {
        this.name = name;
        this.imageUrl = imageUrl;
    }

    render() {
        // Crear contenedor para el campeón
        const campeonDiv = document.createElement('div');
        campeonDiv.classList.add('campeon');

        // Crear la imagen del campeón
        const img = document.createElement('img');
        img.src = this.imageUrl;
        img.alt = this.name;

        // Crear el nombre del campeón
        const nameElement = document.createElement('h3');
        nameElement.textContent = this.name;

        // Añadir imagen y nombre al contenedor
        campeonDiv.appendChild(img);
        campeonDiv.appendChild(nameElement);

        return campeonDiv;
    }
}