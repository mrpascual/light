var User = require("../models/user");

module.exports = {
  index: index,
  create: create
}

function index(req, res) {
    User.find({}, function(err, users) {
      if(err) res.send(err);

      res.json(users);
  });
}

function create(req, res) {
  console.log(req.body);
  var user         = new User();
  user.firstName   = req.body.firstName;
  user.lastName    = req.body.lastName;
  user.middleName  = req.body.middleName;
  user.dob         = req.body.dob;
  user.gender      = req.body.gender;
  user.nationality = req.body.nationality;
  user.pictureUrl  = req.body.pictureUrl;

  user.locs = [];

  // req.body.locs.forEach(function(arr) {
  //   var obj = {};
  //   obj.name = arr[0];
  //   obj.address = arr[1];
  //   obj.zip = arr[2];
  //   obj.currentLoc = arr[3];
  //   user.locs.push(obj);
  // });

  user.save(function(err) {
    if(err) res.send(err);

    res.json({msg: "user created", user: user});
  });

};
