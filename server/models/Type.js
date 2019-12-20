const Entity = require('./Entity')

class Type extends Entity {
    constructor(entity) {
        super(entity, ['name'])
    }
}

exports.module = Type