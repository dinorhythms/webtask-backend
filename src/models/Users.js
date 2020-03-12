import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  phoneNo: { type: Number, required: true, unique: false },
  firstName: { type: String, required: true, unique: false },
  lastName: { type: String, required: true, unique: false },
  age: { type: Number, required: true, unique: false },
  address: { type: String, required: true, unique: false },
  createdOn: {
    type: Date, required: true, unique: false, default: Date.now
  },
  updatedOn: {
    type: Date, required: true, unique: false, default: Date.now
  },
});

const User = mongoose.model('User', userSchema);
export default User;
