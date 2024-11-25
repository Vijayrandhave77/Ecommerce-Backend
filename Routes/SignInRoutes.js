const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
router.use(bodyParser.json());
const signin = require("../Models/SigninSchema");
const { jwtAuthMiddleware, generateToken } = require("../JWT");

router.post("/api/user/signin", async (req, res) => {
  try {
    const data = req.body;
    const newSignin = await signin(data);
    const response = await newSignin.save();

    const payload = {
      id: response.id,
      userName: response.userName,
    };

    const token = generateToken(payload);
    res.status(200).json({ response: response, token: token });
  } catch (err) {
    res.status(500).json({ error: "internal server error" });
  }
});

module.exports = router;
