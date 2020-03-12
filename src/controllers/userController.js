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

export default {
  createUser
};
