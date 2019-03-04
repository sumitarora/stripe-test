const config = require('./../config');

async function index(req, res) {
  const stripeToken = req.body.stripeToken;

  try {
    const charge = await config.stripe.charges.create(
      {
        amount: 1000,
        currency: "usd",
        card: stripeToken,
        capture: false,
        description: "payinguser@example.com"
      }
    );
    const authCharge = await config.stripe.charges.capture(charge.id)
    res.json(authCharge);
  } catch(error) {
    res.json(error);
  }
}

module.exports = {
  index
};

