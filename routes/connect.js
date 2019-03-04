const axios = require("axios");

async function index(req, res) {
  const scope = req.query.scope;
  const code = req.query.code;

  console.log(scope, code);

  const activateUrl = `https://connect.stripe.com/oauth/token`;
  const data = {
    code,
    grant_type: 'authorization_code',
    client_secret: "sk_test_FGoY9UePmimKkUSA7EyqfS2L"
  };
  axios
    .post(activateUrl, data)
    .then(result => {
      res.json(result.data);
    })
    .catch(error => {
      res.json(error);
    });
}

function webhook(req, res) {
  // Retrieve the request's body and parse it as JSON:
  const webhook = req.body;
  if (webhook.type === 'account.application.authorized' || webhook.type === 'account.application.deauthorized') {
    console.log(webhook.id, webhook.type);
  }

  res.send(200);
};

module.exports = {
  index
};


module.exports = {
  index,
  webhook
};
