require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(database => {
    console.log('Connected to the db')
    app.set('db', database);
}).catch( err => console.log(err) );


const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is listening on ${ PORT }. 🏄`);
});