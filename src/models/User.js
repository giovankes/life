import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  id: {
    type: String,
    unique: true,
    required: true,
  },
});

UserSchema.statics.findByLogin = async function (login) {
  let user = await this.findOne({
    username: login,
  });

  if (!user) {
    user = await this.findOne({ email: login });
  }

  return user;
};

// NOTE: this is for later in development //

// UserSchema.pre('remove', function(next){
//  this.model('Message').deleteMany({user:this._id}m next)
// })

const User = mongoose.model('User', UserSchema);

export default User;
