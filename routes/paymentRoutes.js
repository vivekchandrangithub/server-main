const express = require('express');
const router = express.Router();
const stripe = require('stripe')('sk_test_51Q4NypEs0ux6h8BMOynvQ9mpcUiAoh3rJmcqG51D7NKXhAXcID0stMs0jQUWNZFm1EhnMRDp79z0rqDRl9gBLVTi00m1W0Degj');

router.post('/create-payment-intent', async (req, res) => {
  try {
    const { amount } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount, // amount in smallest currency unit (e.g., cents)
      currency: 'usd',
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;