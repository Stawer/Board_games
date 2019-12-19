class Game{
    name = null;
    author = null;
    type = null;
    price = null;
    language = null;
    age = null;
    players = null;

    constructor(game = null) {
        if (game) {
            this.name = serie.name;
            this.author = serie.author;
            this.type = serie.type;
            this.price = serie.price;
            this.language = serie.language;
            this.age = serie.age;
            this.players = serie.players;
        }
    }
}