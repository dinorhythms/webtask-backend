import User from '../models/Users';

const createUser = async (req, res) => {
  try {
    const {
      firstName, lastName, age, address, phoneNo
    } = req.body;

    const newUser = new User({
      firstName,
      lastName,
      age,
      phoneNo,
      address,
      created_on: Date.now(),
      updated_on: Date.now()
    });

    const saveUser = await newUser.save();

    return res.status(201).json({
      status: 'success',
      message: 'user created successfully',
      data: saveUser
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      error: error.message
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const {
      firstName, lastName, age, address, phoneNo
    } = req.body;

    const { id } = req.params;

    const getUser = await User.findById(id);

    if (!getUser) {
      return res.status(401).json({
        status: 'error',
        errors: 'user does not exist'
      });
    }

    const user = new User({
      _id: id,
      firstName,
      lastName,
      age,
      phoneNo,
      address,
      updated_on: Date.now()
    });

    await User.updateOne({ _id: id }, user);

    return res.status(201).json({
      status: 'success',
      message: 'user updated successfully',
      data: user
    });
  } catch (error) {
    if (error.name === 'CastError') {
      return res.status(500).json({
        status: 'error',
        error: 'id in not valid'
      });
    }
    return res.status(500).json({
      status: 'error',
      error: error.toString()
    });
  }
};

const getAll = async (req, res) => {
  try {
    const users = await User.find();

    return res.status(201).json({
      status: 'success',
      message: 'get user successfully',
      data: users
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      error: error.message
    });
  }
};

const getOne = async (req, res) => {
  try {
    const { id } = req.params;
    const getUser = await User.findById(id);

    if (!getUser) {
      return res.status(401).json({
        status: 'error',
        errors: 'user does not exist'
      });
    }

    return res.status(201).json({
      status: 'success',
      message: 'get user successfully',
      data: getUser
    });
  } catch (error) {
    if (error.name === 'CastError') {
      return res.status(500).json({
        status: 'error',
        error: 'id in not valid'
      });
    }
    return res.status(500).json({
      status: 'error',
      error: error.message
    });
  }
};

const deleteOne = async (req, res) => {
  try {
    const { id } = req.params;
    const getUser = await User.findById(id);

    if (!getUser) {
      return res.status(401).json({
        status: 'error',
        errors: 'user does not exist'
      });
    }
    await User.deleteOne({ _id: id });

    return res.status(201).json({
      status: 'success',
      message: 'user deleted successfully',
    });
  } catch (error) {
    if (error.name === 'CastError') {
      return res.status(500).json({
        status: 'error',
        error: 'id in not valid'
      });
    }
    return res.status(500).json({
      status: 'error',
      error: error.message
    });
  }
};

export default {
  createUser, updateUser, getAll, getOne, deleteOne
};
