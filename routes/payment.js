const config = require('./../config');

async function index(req, res) {
  const stripeToken = req.body.stripeToken;

  try {
    const charge = await config.stripe.charges.create(
      {
        amount: 99999999, // amount in cents, again
        currency: "inr",
        card: stripeToken,
        description: "payinguser@example.com"
      });
      res.json(charge);
  } catch(error) {
    switch (error.type) {
      case "StripeCardError":
        // A declined card error
        res.json(err); // => e.g. "Your card's expiration year is invalid."
        break;
      case "RateLimitError":
        // Too many requests made to the API too quickly
        break;
      case "StripeInvalidRequestError":
        // Invalid parameters were supplied to Stripe's API
        break;
      case "StripeAPIError":
        // An error occurred internally with Stripe's API
        break;
      case "StripeConnectionError":
        // Some kind of error occurred during the HTTPS communication
        break;
      case "StripeAuthenticationError":
        // You probably used an incorrect API key
        break;
      default:
        // Handle any other types of unexpected errors
        break;
    }
  }
}

module.exports = {
  index
};
