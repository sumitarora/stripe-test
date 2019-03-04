const stripeApiKeyTesting = "sk_test_FGoY9UePmimKkUSA7EyqfS2L";

const stripe = require("stripe")(stripeApiKeyTesting);

module.exports = {
  stripe
}