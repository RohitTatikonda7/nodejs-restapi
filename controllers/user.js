const User = require("../models/User");

const createUser = async (req, res, next) => {
  try {
    const { name, email,username,password,phone,address,id } = req.body;
    if (!name || !email || !username||!password||!phone||!address) {
      res.status(400);
      return next(new Error("All fields are required"));
    }

    // check if user already exists
    const isUserExists = await User.findOne({ username });

    if (isUserExists) {
      res.status(404);
      return next(new Error("Username already exists"));
    }

    const user = await User.create({
      name, email,username,password,phone,address,id
    });

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
    return next(error);
  }
}

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

const getUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({id})

    if (!user) {
      res.status(404);
      return next(new Error("User not found"));
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

const updateUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({id});

    if (!user) {
      res.status(404);
      return next(new Error("User not found"));
    }

    const updatedUser = await User.findOneAndUpdate(
      {id:user.id},
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );

    res.status(200).json({
      success: true,
      updatedUser,
    });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

const deleteUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);

    if (!user) {
      res.status(404);
      return next(new Error("User not found"));
    }

    await User.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "User has been deleted.",
    });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

module.exports = {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};