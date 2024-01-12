const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("Hello Randalf")
})

const PORT = process.env.port || 3000

app.listen(PORT)
console.log(`Web server running on port: ${PORT}`);

