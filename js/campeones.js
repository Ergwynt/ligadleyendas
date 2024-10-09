export default class Campeon {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.imageUrl = `https://ddragon.leagueoflegends.com/cdn/13.18.1/img/champion/${data.image.full}`;
        this.title = data.title;
        this.description = data.blurb;
        this.completa = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${data.id}_0.jpg`;
        this.roles = data.tags;
    }
}

