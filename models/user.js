var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

var locationSchema = new mongoose.Schema({
  name:       String,
  address:    String,
  zip:        String
});

var userSchema = new mongoose.Schema({
  firstName:   String,
  lastName:    String,
  middleName:  String,
  dob:         Date,
  gender:      String,
  nationality: String,
  pictureUrl:  String,
  locs:        [locationSchema]
});

var User = mongoose.model('User', userSchema);

module.exports = User;
