/**
 * @author sirxtias
 * This class contains CRUD operations 
 * for the author
 */
class AuthorController {
    path = 'author'

    constructor(app) {
        this.handler(app);
        console.log(`Se inicializo el endpoint author`);
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
    * @api {post} /author/:id Create a new author
    * @apiName createAuthors
    * @apiGroup authors
    * 
    * @apiParam {String} name mandatory - author name
    * 
    * @apiSuccess [201] {Object} response author Created.
    * @apiSuccess [201] {Object} response.id id of the author created.
    * @apiSuccess [201] {Object} response.name name of the author created.
    */
   create(req, res) {

   }

   /**
    * @api {get} /authors/:id Get the list of the authors
    * @apiName getAuthors
    * @apiGroup authors
    * 
    * @apiSuccess [200] {Object[]} response A list of authors.
    * @apiSuccess [200] {Object} response.id id of the author.
    * @apiSuccess [200] {Object} response.name name of the author.
    */
   
   read(req, res) {

   }

   /**
    * @api {get} /authors/:id Get the author with the specified id.
    * @apiName getAuthors
    * @apiGroup authors
    * 
    * @apiParam {Number} id mandatory - id of the author that you want to get.
    * 
    * @apiSuccess [200] {Object} response The author found by id.
    * @apiSuccess [200] {Object} response.id id of the author.
    * @apiSuccess [200] {Object} response.name name of the author.
    */

   oneread(req, res) {

   }
   /**
    * @api {patch} /authors/:id update a author with the specified id.
    * @apiName updateAuthors
    * @apiGroup authors
    * 
    * @apiParam {Number} id mandatory - id of the author that you want to update.
    * 
    * @apiSuccess [204] {Void} response The void response if the action actually works.
    * 
    */

   update(req, res) {

   }
   /**
    * @api {delete} /authors/:id delete a author with the specified id.
    * @apiName deleteAuthors
    * @apiGroup authors
    * 
    * @apiParam {Number} id mandatory - id of the author that you want to update.
    * 
    * @apiSuccess [204] {Void} response The void response if the action actually works.
    * 
    */
   delete(req, res) {

   }
}

module.exports = AuthorController;