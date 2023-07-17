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