const Ticket = require('../models/Ticket')

class MyDB {
    constructor() {
        this.tickets  = []
    }


    // create new ticket 
    /**
     *  create and save a new ticket 
     * @param {string} name 
     * @param {number} price 
     * @returns {Ticket} return a ticket object
     */
    create(name, price){
        const ticket = new Ticket(name, price)
        this.tickets.push(ticket)
        return ticket;
    }


    // sell multiple ticket
    /**
     * create multiple ticket for a single user
     * @param {string} name
     * @param {number} price
     * @param {number} quantity
     * @returns {Array<Ticket>}
     */
    bulkCreate(name, price, quantity){
        const result = []
        for (let i = 0; i < quantity; i++) {
            const ticket = this.create(name, price)
            result.push(ticket)
        }
        return ticket
    }



    // single ticket 
    /**
     *  return all tickets
     */
    find() {
        return this.tickets;
    }


    // find all tickets for a given user
    /**
     * find all tickets for a given user
     * @param {string} name
     * @return {Array <Ticket> </Ticket>}
     */
    findByName(name){
        const ticket = this.tickets.filter(
            /**
             * @param {Ticket} ticket
             */
            ticket => ticket.name === name
        )
        return ticket
    }


    // single ticket
    /**
     * find ticket by ticket id
     * @param {string} ticketId
     * @return {Ticket}
     */
    findById(ticketId){
        const ticket = this.tickets.find(
            /**
             * @param {Ticket} ticket
             */
            (ticket) => ticket.id === ticketId
        )
        return ticket
    }



    // Update ticket info
    /**
     * @param {string}ticketId
     * @param {{name: string, price: number}} ticketBody
     * @return {Ticket}
     */
    updateById(ticketId, ticketBody){
        const ticket = this.findById(ticketId)
        ticket.name = ticketBody.name ?? ticket.name 
        ticket.price = ticketBody.price ?? ticket.price
        ticket.updateAt = new Date()

        return ticket
    }


    // Delete ticket form db
    /**
     * @param {string} ticket 
     */
    deleteById(ticketId){
        const index = this.tickets.findIndex((ticket) => ticket.id === ticketId)

        if(index !== -1){
            this.tickets.splice(index,1)
            return true
        } else{
            return false;
        }
    }


    // draw
    /**
     * find winners
     * @param {number} winnerCount
     * @param {Array<Ticket>}
     */
    draw(winnerCount){
        let winnerIndexes = new Array(winnerCount)

        let index = 0;
        while(index < winnerCount) {
            let winnerIndex = Math.floor() * this.tickets.length
            // console.log('Winner index **** ', winnerIndex)
            if(!winnerIndexes.includes(winnerIndex)){
                winnerIndexes[index++] = winnerIndex
                continue
            }
        }

        const winners = winnerIndexes.map(index => this.tickets[index])
        return winners
    }
}



const myDB = new MyDB()
module.exports = myDB

