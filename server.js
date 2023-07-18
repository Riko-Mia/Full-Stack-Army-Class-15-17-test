/** video 15 start
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')


const app = express()


app.use(
    [
        morgan('dev'),
        cors(),
        express.json()
    ]
)

app.get('/name', (_req, res) => {
    res.json([
        {
            fastName : 'Riko',
            lastName : 'Ahmed',
            fullName : 'riko mia'
        }
    ])
})

app.listen(4000, () => {
    console.log('Server is listing on port 4000')

}) 
Video 15 end */

/** Video 16 start 
const express = require('express')
const morgen = require('morgan')

const app = express()

// Simple logger (request tester) ############### ########## 
const myLogger = (req,res,next) => {
    console.log(`${req.url} - ${req.method} - ${new Date().toISOString()}` )
    next()
}


//app.use(myLogger) // Custom Logger globally connected. ************* Function don't invoking or call. 
app.use([
    morgen('dev')
])



// this is router model ****************** ################ @@@@@@@@@@@@@@@@@@ %%%%%%%%%%% 
app.get('/goodby',(req, res, next) => {
   // console.log(`${req.url} - ${req.method} - ${new Date().toISOString()}`) // logger test
    res.json({name : 'Riko ahmed'}) 
})
app.get('/house', (req, res, next) => {
    res.json({home : 'sweet home'}) 
})


app.listen(4000, () => {
    console.log('Application running 4000')
})
*/



/** Project staffing start here*/


require('dotenv').config()
const http = require('http')
const app = require('./app/app')


const server = http.createServer(app)
// console.log(server)
// console.log(process.env)

const PORT = process.env.PORT || 4000
server.listen(PORT, () => {
    console.log(`Server listing on PORT ${PORT}`)
})





