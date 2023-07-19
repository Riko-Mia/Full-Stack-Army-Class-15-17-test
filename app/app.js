require('dotenv').config("../.env")
const express = require('express')
const middleware = require('./middleware')
const {notFoundHandler, errorHandler} = require("./error")




const app = express()


app.use(middleware)
app.use(require('./routers'))


// app.use(require("./middleware"))
// app.use(require('./routes'))
app.use(notFoundHandler)
app.use(errorHandler)


 /**   // app.get('/health', (req, res) => {          // this is route
//     // throw new Error('Error Occur')
//     res.status(200).json({message: 'Success'})
// })



// app.use((req,_res,next) => {
//     const error = new Error('resource not found')
//     error.status = 404
//     next(error)
// })

// app.use((error, req,res, next ) => {
//     if(error.status) {
//         return res.status(error.status).json({
//             message: error.message
//         })
//     }
//     res.status(500).json({message: 'Something went wrong'})
// })

*/



module.exports = app;