const Ticket = require('../models/Ticket')

const router = require('express').Router();


router.use('/api/v1/tickets', require('../routes/ticket'))


router.get('/health', (req, res) => {          // this is route
/**   // throw new Error('Error Occur')
    // const error = new Error('hello error')
    // error.status = 400
    // throw error */ 
    res.status(200).json({message: 'Success'})
})





module.exports = router;
