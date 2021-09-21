
function generateKey() {
	const allowedChars = '1234567890abcdefghijkmnopqrstuvwxyz'
	const length = 32
	let key = ''
	for( let i=0; i<length; i++ ) {
		let r = Math.ceil(Math.random() * allowedChars.length)
		key += allowedChars.charAt(r)
	}
}

const newKey = (req, res) => {
	const key = generateKey()
	// lägg till key till db
	// om ok, svara med 200
	res.sendStatus(500)
}

module.exports = { generateKey }
