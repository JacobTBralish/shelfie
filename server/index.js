require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./controller');


const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(database => {
    console.log('Connected to the db')
    app.set('db', database);
}).catch( err => console.log(err) );

app.get('/api/inventory', controller.getAll);
// app.get('/api/inventory/:id', controller.getOne);
app.post('/api/inventory', controller.createProduct);
// app.put('/api/inventory/:id', controller.editProduct);
app.delete('/api/inventory/:id', controller.deleteProduct);


const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is listening on ${ PORT }. 🏄`);
});