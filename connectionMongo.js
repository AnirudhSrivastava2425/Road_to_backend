const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function connect(){
    let result = await client.connect();
    let db = result.db('Temp');
    let collection = db.collection('temp1');
    let response = await collection.find({}).toArray();

    if (db)
        console.log(response);
    client.close();
}
connect();