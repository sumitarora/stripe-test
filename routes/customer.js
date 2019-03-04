const config = require('./../config');

async function index(req, res) {
  const stripeToken = req.body.stripeToken;

  try {
    const customer = await config.stripe.customers.create({
      source: stripeToken,
      email: 'paying.user@example.com',
    });
  
    // Charge the Customer instead of the card:
    const charge = await config.stripe.charges.create({
      amount: 1000,
      currency: 'usd',
      customer: customer.id,
    });
    res.json(charge);
  } catch(error) {
    res.json(error);
  }
}

module.exports = {
  index
};