const express = require('express')
const app = express()
const PORT = 9000
app.use('/', express.static('public'))
app.get('/backend', (req, res) => res.send('Hello World!'))

app.listen(PORT, () => {
	console.log(`Example app listening on port ${PORT}!`)
	console.log('backend url: [/backend]')
	console.log('frontend url: [/]')
})
