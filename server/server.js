const express = require('express');
const db = require('./db');
const Pizza = require('./models/pizzaModel');

const app = express();
app.use(express.json());


const pizzasRoute = require('./routes/pizzasRoutes');
const userRoute = require('./routes/userRoute');
const ordersRoute = require('./routes/userRoute');


app.use('/api/pizzas/', pizzasRoute);
app.use('/api/users/', userRoute);
app.use('/api/orders/', ordersRoute)


app.get('/', (req, res) => {
    res.send('Server is Working');
});


const port = process.env.Port || 5000;
app.listen(port, () => console.log(`Server is Listening on port ${port}`));