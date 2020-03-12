import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  phone_no: { type: Number, required: true, unique: true },
  first_name: { type: String, required: true, unique: false },
  last_name: { type: String, required: true, unique: false },
  address: { type: String, required: true, unique: false },
  created_on: { type: Date, required: false, unique: false },
  updated_on: { type: Date, required: false, unique: false },
});

const User = mongoose.model('User', userSchema);
export default User;
