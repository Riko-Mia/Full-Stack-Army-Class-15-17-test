const shortid = require('shortid')

class Ticket {
    constructor(name, price){
        this.id = shortid.generate()
        this.name = name;
        this.price = price;
        this.createdAt = new Date()
        this.updateAt = new Date()
    }
}



module.exports = Ticket