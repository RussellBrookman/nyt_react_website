const router = require("express").Router();
const articleRoute = require("./articles");

router.use("/saved", articleRoute);

module.exports = router;