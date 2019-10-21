'mongodb schema';
import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    sub: String,
    email: String,
    role: String,
    password: String
});

export default mongoose.model('User', UserSchema);