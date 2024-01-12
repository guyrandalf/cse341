const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello')
})

const PORT = process.env.port || 3000

app.listen(PORT)
console.log(`Web server listening on ${PORT}`);