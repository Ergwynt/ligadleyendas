export default class Campeon {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.imageUrl = `https://ddragon.leagueoflegends.com/cdn/13.18.1/img/champion/${data.id.image.full}`;
        this.title = data.title;

    }

}