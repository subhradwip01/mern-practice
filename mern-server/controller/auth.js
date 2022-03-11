const User = require("../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const user = require("../model/user");

exports.postSignUp = async (req, res, next) => {
  const name = req.body.name;
  const password = req.body.password;
  const email = req.body.email;
  const mobile = req.body.mobile;
  const address = req.body.address;

  if (!name || !password || !email || !mobile || !address) {
    return res.status(422).json({
      message: "Plese provide valid values",
    });
  }

  const hashedPasword = await bcrypt.hash(password, process.env.SALT);

  const user = new User({
    name,
    password: hashedPasword,
    email,
    mobile,
    address
  });

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      const err = new Error("User is Already Exist");
      err.statusCode = 422;
      throw err;
    }

    const result = await user.save();
    if (!result) {
      throw new Error("Something went wrong!");
    }
    res.status(201).json({
      message: "User Created",
      userId: result._id,
    });
  } catch (e) {
    next(e);
  }
};

exports.postLogin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    const err = new Error("Email and password should provide");
    err.statusCode = 422;
    return next(err);
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (!userExist) {
      const err = new Error("User doesn't with this email Id");
      err.statusCode = 422;
      throw err;
    }
    const checkPassord = await bcrypt.compare(password, userExist.password);

    if (!checkPassord) {
      const err = new Error("Password doesn't matched");
      err.statusCode = 403;
      throw err;
    }
    const token = jwt.sign(
      {
        userId: userExist._id.toString(),
        email: userExist.email,
      },
      process.env.PRIVATE_KEY,
    );
    res.cookie("token_id",token)
    res.status(201).json({
      message: "Login Successful",
      token:token
    });
  } catch (e) {
    next(e);
  }
};
