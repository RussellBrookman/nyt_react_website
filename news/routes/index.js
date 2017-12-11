const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// find out what's going on here
router.use("/api", apiRoutes);

// Incase no API search result returns
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/  put a file here  /index.html"));
// });

module.exports = router;