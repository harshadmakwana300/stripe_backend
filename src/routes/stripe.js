const router = require("express").Router();
const stripeCtrl = require(srcDirPath + "/controller/stripeCtrl");

router.post("/", stripeCtrl.getRecords);
router.post("/create", stripeCtrl.createPaymentLink);

module.exports = router;
