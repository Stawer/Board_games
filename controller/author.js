export class AuthorController {
    constructor(app) {
        this.handler(app);
    }

    handler(app) {
        //Create
        app.post('/', function (req, res) {
            this.create(req, res);
        });
        //Read
        app.get('/', function (req, res) {
            this.read(req, res);
        });
        //Update
        app.patch('/', function (req, res) {
            this.update(req, res);
        });
        //Delete
        app.delete('/', function (req, res) {
            this.delete(req, res);
        });
    }

    create(req, res) {

    }

    read(req, res) {

    }

    update(req, res) {

    }

    delete(req, res) {

    }
}