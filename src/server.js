const express = require('express')
const app = express()
const keys = require('./routes/keys.js')
const data = require('./routes/data.js')

// Will use env variable if defined. Used when deployed on Heroku
const PORT = process.env.PORT || 1337

app.use('/keys', keys)
app.use('/data', data)

app.listen(PORT, () => {
	console.log('Server is listening on port ' + PORT);
})
