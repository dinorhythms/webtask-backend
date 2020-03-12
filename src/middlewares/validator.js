const validateCreate = async (req, res, next) => {
  try {
    const {
      firstName, lastName, age, address, phoneNo
    } = req.body;

    const error = [];

    if (!firstName || firstName === '') error.push({ firstname: 'First Name is required' });
    if (!lastName || lastName === '') error.push({ lastname: 'Last Name is required' });
    if (!age || age === '') error.push({ age: 'Age is required' });
    if (age && (age <= 14 || age >= 25)) error.push({ age: 'Age must be above 14 and below 25' });
    if (!address || address === '') error.push({ address: 'Address is required' });
    if (!phoneNo || phoneNo === '') error.push({ phone: 'Phone Number is required' });

    if (error.length > 0) {
      return res.status(401).json({
        status: 'error',
        errors: error
      });
    }
    return next();
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      error: error.message
    });
  }
};

const validateUpdate = async (req, res, next) => {
  try {
    const {
      firstName, lastName, age, address, phoneNo
    } = req.body;

    const { id } = req.params;

    const error = [];

    if (!id) error.push({ id: 'user Id is required' });
    if (!firstName || firstName === '') error.push({ firstname: 'First Name is required' });
    if (!lastName || lastName === '') error.push({ lastname: 'Last Name is required' });
    if (!age || age === '') error.push({ age: 'Age is required' });
    if (age && (age <= 14 || age >= 25)) error.push({ age: 'Age must be above 14 and below 25' });
    if (!address || address === '') error.push({ address: 'Address is required' });
    if (!phoneNo || phoneNo === '') error.push({ phone: 'Phone Number is required' });

    if (error.length > 0) {
      return res.status(401).json({
        status: 'error',
        errors: error
      });
    }
    return next();
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      error: error.message
    });
  }
};

export default {
  validateCreate, validateUpdate
};
