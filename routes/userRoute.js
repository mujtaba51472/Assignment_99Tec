const express = require("express");
const {
  userRegister,
  loginUser,
  logout,
 
} = require("../controllers/userController");
const { isAuthenticated} = require("../middlewares/isAuth");
const router = express.Router();
router.route("/userregister").post(userRegister);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);










module.exports = router;
