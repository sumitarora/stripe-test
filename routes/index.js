function index(req, res) {
  res.render('index', { title: 'Stripe Test', message: 'Hello there!' })
}

module.exports = {
  index
};