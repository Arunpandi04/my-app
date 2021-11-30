import mongoose from 'mongoose';
export enum Gender {
  Male = 'Male',
  Female = 'Female'
}
const UserSchema = new mongoose.Schema({
  profilePicture: String,
  email: String,
  address:String,
  firstName: String,
  lastName: String,
  gender:{type:Gender},
  phoneNumber:Number,
  dob:Date
  },{timestamps: true});
  
  export default mongoose.model('user', UserSchema);