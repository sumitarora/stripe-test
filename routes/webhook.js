function index(req, res) {
  // Retrieve the request's body and parse it as JSON:
  const webhook = req.body;
  if (webhook.type === 'charge.succeeded' || webhook.type === 'charge.failed') {
    console.log(webhook.id, webhook.type);
  }
  res.send(200);
};

module.exports = {
  index
};
