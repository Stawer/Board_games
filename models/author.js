export class Author{
    name = null;

    constructor (author = null) {
        if (author){
            this.name = author.name;
        }
    }
}