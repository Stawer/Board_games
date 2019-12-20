const express = require('express')
const app = express()
const port = 3000
//parsea las rerquest json
app.use(express.json())

//permite modularizar y asignar rutas particulares
app.use('/games', require('./routes/games'))
app.use('/authors', require('./routes/authors.js'))
app.use('/types', require('./routes/types'))
app.use('/languages', require('./routes/languages'))

app.listen(port, () => {
    console.log('listening on port', port)
})
