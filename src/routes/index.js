const Express = require("express");
const router = Express.Router();

router.use("/photos", require("./photos"));

module.exports = router;
