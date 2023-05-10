const UserModel = require("../models/UserModel");
const bcrypt = require("bcrypt");
const sendToken = require("../utilis/jwtToken");
const ErrorHandler = require("../utilis/errorhandler");
const catchAsyncErrHandler = require("../middlewares/catchAsyncErrors");

// ____________register user _____________
exports.userRegister = catchAsyncErrHandler(async (req, res, next) => {
  let { name, email, password } = req.body;


  const userExist = await UserModel.findOne({ email });
  if (userExist) {
  
    return next(new ErrorHandler(`User Exist already`, 409));
  } else {
    const user = await UserModel.create({
      name,
      email,
      password,
    });

    // token

    sendToken(user, 201, res);
  }
});

// ______________________login user___________________

exports.loginUser = catchAsyncErrHandler(async (req, res, next) => {
  const { email, password } = req.body;


  if (!email || !password) {
    return next(new ErrorHandler("Please Enter Email & Password", 400));
  }

  const user = await UserModel.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }

  const isPasswordMatched = await user.comparePassword(password);
  console.log("passss", isPasswordMatched);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }
  sendToken(user, 200, res);
});

// /____________________________Logout User_________________
exports.logout = catchAsyncErrHandler(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()), 
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});
