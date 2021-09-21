const { MongoClient } = require('mongodb');
let login
if( process.env.DB_LOGIN ) {
	login = JSON.parse(process.env.DB_LOGIN)
} else {
	login = require('./database.json')
}

function getClient() {
	return new MongoClient(login.uri, { useNewUrlParser: true, useUnifiedTopology: true });
}

// client.connect(err => {
// 	const collection = client.db("test").collection("devices");
// 	// perform actions on the collection object
// 	client.close();
// });

export { getClient }
