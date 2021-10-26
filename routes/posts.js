const router = require("express").Router();
const verify = require("./verifyToken");

router.get("/", verify, async (req, res) => {
  res.json(req.user);
});

module.exports = router;
