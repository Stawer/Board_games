/**
 * @author sirxtias
 * This class contains CRUD operations 
 * for the games
 */
class GameController {
    path = 'game'

    constructor(app) {
        this.handler(app);
        console.log(`Se inicializo el endpoint game`);
    }

    handler(app) {
        //Create
        app.post(`/${this.path}`, function (req, res) {
            this.create(req, res);
        });
        //Read
        app.get(`/${this.path}`, function (req, res) {
            this.read(req, res);
        });
        //Just read one
        app.get(`/${this.path}/:id`, function (req, res) {
            this.oneread(req, res);
        });
        //Update
        app.patch(`/${this.path}/:id`, function (req, res) {
            this.update(req, res);
        });
        //Delete
        app.delete(`/${this.path}/id`, function (req, res) {
            this.delete(req, res);
        });
    }
    /**
     * @api {post} /games/:id Create a new game
     * @apiName CreateGames
     * @apiGroup Games
     * 
     * @apiParam {String} name mandatory - Game name
     * @apiParam {Number} id mandatory - id of the game
     * @apiParam {Author} author mandatory - Game author
     * @apiParam {String} type mandatory - Game type
     * @apiParam {Number} price mandatory - Game price
     * @apiParam {String} language mandatory - Game language
     * @apiParam {Number} age mandatory - Minimum age for the game
     * @apiParam {Number} players mandatory - Maximum number of players in the game
     * 
     * @apiSuccess [201] {Object} response Game Created.
     * @apiSuccess [201] {Object} response.name name of the game created.
     * @apiSuccess [201] {Object} response.id id of the game created.
     * @apiSuccess [201] {Object} response.author Designer of the game created.
     * @apiSuccess [201] {Object} response.type Type of the game created.
     * @apiSuccess [201] {Object} response.price Price of the game created.
     * @apiSuccess [201] {Object} response.language language of the game created.
     * @apiSuccess [201] {Object} response.age Minimum age of the game created.
     * @apiSuccess [201] {Object} response.players Maximum number of players of the game created.
     */
    create(req, res) {

    }

    /**
     * @api {get} /games/:id Get the list of the games
     * @apiName getGames
     * @apiGroup Games
     * 
     * @apiSuccess [200] {Object[]} response A list of Games.
     * @apiSuccess [201] {Object} response.name name of the game.
     * @apiSuccess [200] {Object} response.id id of the game.
     * @apiSuccess [200] {Object} response.author Designer of the game.
     * @apiSuccess [200] {Object} response.type Type of the game.
     * @apiSuccess [200] {Object} response.price Price of the game.
     * @apiSuccess [200] {Object} response.language language of the game.
     * @apiSuccess [200] {Object} response.age Minimum age of the game.
     * @apiSuccess [200] {Object} response.players Maximum number of players of the game.
     */

    read(req, res) {

    }

    /**
     * @api {get} /games/:id Get the game with the specified id.
     * @apiName getGames
     * @apiGroup Games
     * 
     * @apiParam {Number} id mandatory - id of the game that you want to get.
     * 
     * @apiSuccess [200] {Object} response The game found by id.
     * @apiSuccess [201] {Object} response.name name of the game.
     * @apiSuccess [200] {Object} response.id id of the game.
     * @apiSuccess [200] {Object} response.author Designer of the game.
     * @apiSuccess [200] {Object} response.type Type of the game.
     * @apiSuccess [200] {Object} response.price Price of the game.
     * @apiSuccess [200] {Object} response.language language of the game.
     * @apiSuccess [200] {Object} response.age Minimum age of the game.
     * @apiSuccess [200] {Object} response.players Maximum number of players of the game.
     */
    oneread(req, res) {

    }
    /**
     * @api {patch} /games/:id update a game with the specified id.
     * @apiName updateGames
     * @apiGroup Games
     * 
     * @apiParam {Number} id mandatory - id of the game that you want to update.
     * 
     * @apiSuccess [204] {Void} response The void response if the action actually works.
     * 
     */
    update(req, res) {

    }
    /**
     * @api {delete} /games/:id delete a game with the specified id.
     * @apiName deleteGames
     * @apiGroup Games
     * 
     * @apiParam {Number} id mandatory - id of the game that you want to update.
     * 
     * @apiSuccess [204] {Void} response The void response if the action actually works.
     * 
     */
    delete(req, res) {

    }
}

module.exports = GameController;