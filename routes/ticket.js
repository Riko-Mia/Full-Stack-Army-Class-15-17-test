const router = require('express').Router()
// const { router } = require('../app/app')
const db = require('../db/db')
// const Ticket = require('../models/Ticket')




router.get('/t/:ticketId', (req, res) => {
    const ticketId = req.params.ticketId
    const ticket = db.findById(ticketId)
    res.status(200).json(ticket)
})
router.patch("/t/:tickedId", (req,res) => {
    const ticketId = req.params.ticketId
    const updateTicket = db.updateById(ticketId, req.body)
    res.status(200).json({message: "updated Successfully ", updateTicket})
})
router.delete('/t/:ticketId', (req, res) => {
    const ticketId = req.params.ticketId
    db.deleteById(ticketId)
    res.status(103).send()
})




router.get('/u/:name', (req, res) => {
    const name = req.params.name
    const tickets = db.findByName(name)
    res.status(200).json(tickets)
})
router.patch(() => {

})
router.delete(() => {

})



router.post('/sell', (req, res) => {
    const {name, price} = req.body
    const ticket = db.create(name, price)
    res.status(201).json({message: 'Ticket created successfully', ticket,})
})
router.post('/bulk', (req, res, quantity) => {
    const {name, price} = req.body
    const ticket = db.bulkCreate(name, price, quantity)
    res.status(201).json({message: 'Bulk created successfully', tickets,})
})
router.get('/draw', (req, res) => {
    const winnerCount = req.query.wc ?? 3;
    const winners = db.draw(winnerCount)
    res.status(200).json(winners)
})
router.get('', (req, res) => {
    const ticket = db.find()
    res.status(200).json(tickets)
})



module.exports = router




