const express = require('express')
const router = express.Router();
import { v4 as uuidv4 } from 'uuid';
// const { v4: uuidv4 } = require('uuid');
const stripe = require('stripe')('sk_test_51KnMWsITdJ91MlzmMqlUwmXTTaCMQWT6Zbr7M4bL1qZbFhz22QCQ8fplKwSTmXONGMRUy8YXh6CChP6yBgJb3Blp00BOtMJf80');

router.post('/placeorder', async(req, res) => {

    const {token, subtotal, currentUser, cartItems} = req.body;

    try {
        const customer = await stripe.customers.create({
            token : token.email,
            source: token.id
        })
        const payment = await stripe.charges.create({
            amount : subtotal,
            currency : 'ALL',
            customer : customer.id,
            receipt_email : token.email
        },{
            idempotencyKey : uuidv4()
        })

        if(payment) {
            res.send('Payment Done')
        }
        else {
            res.send('payment Failed')
        }

    } catch (error) {
        return res.status(400).json({message : 'Something went wrong' + error})
    }

});

module.exports = router;