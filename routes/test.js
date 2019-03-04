const config = require("./../config");

async function index(req, res) {
  try {
    // distributedCharge();
    // destinationCharge();
    res.json(charge);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
}

function distributedCharge() {
      const charge = await config.stripe.charges.create({
      amount: 3000,
      application_fee: 2000,
      currency: "usd",
      source: "tok_visa",
      expand: ['application', 'application_fee', 'balance_transaction']
    }, {
      stripe_account: "acct_1E7qcuFa7iFRGBt0",
    });
}

function destinationCharge() {
    const charge = await config.stripe.charges.create({
      amount: 1000,
      currency: "usd",
      source: "tok_visa",
      transfer_data: {
        destination: "acct_1E7qcuFa7iFRGBt0"
      }
    });
}

module.exports = {
  index
};
