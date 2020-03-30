const Express = require("express");
const router = Express.Router();

router.use("/photos", require("./photos"));
router.use("/health", require("./health"));

module.exports = router;
