const Entity = require('./Entity')

class Inventory extends Entity { 
    constructor(entity) {
        super(entity, ['game_id', 'quantity'])
    }
}

module.exports = Inventory