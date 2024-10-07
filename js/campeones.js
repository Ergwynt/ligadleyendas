// campeones.js

export class Campeon {
    constructor(name, imageUrl) {
        this.name = name;
        this.imageUrl = imageUrl;
    }

    // A method to render the champion in HTML format
    render() {
        const championDiv = document.createElement('div');
        championDiv.classList.add('champion');

        // Traemos la imagen 
        const img = document.createElement('img');
        img.src = this.imageUrl;
        img.alt = this.name;

        // Create paragraph for the name
        const nameElement = document.createElement('p');
        nameElement.textContent = this.name;

        // Append the image and name to the championDiv
        championDiv.appendChild(img);
        championDiv.appendChild(nameElement);

        return championDiv;
    }
}