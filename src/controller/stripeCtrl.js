const stripe = require("stripe")(process.env.SECRET_KEY);

module.exports = {
  getRecords: async function (req, res) {
    var product_id = req.body.product_id;
    if (product_id) {
      const prices = await stripe.prices.list({
        limit: 16,
        product: product_id,
      });

      const filterPrices = prices.data.sort(
        (a, b) => a.unit_amount - b.unit_amount
      );

      res.send({
        success: 1,
        message: "pricelist success",
        prices: filterPrices,
      });
    } else {
      res.send({
        success: 0,
        message: "product_id is missing",
      });
    }
  },
  createPaymentLink: async function (req, res) {
    var price_id = req.body.price_id;
    if (price_id) {
      const paymentLink = await stripe.paymentLinks.create({
        line_items: [
          {
            price: price_id,
            quantity: 1,
          },
        ],
      });
      res.send({
        success: 1,
        message: "Create link successfully",
        data: paymentLink,
      });
    } else {
      res.send({
        success: 0,
        message: "price_id is missing",
      });
    }
  },
};
