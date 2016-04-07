var User = require("../models/user");

module.exports = {
  index: index,
  show: show,
  create: create,
  update: update,
  destroy: destroy
}

function index(req, res) {
    console.log("grabbing users")
    User.find({}, function(err, users) {
      if(err) res.send(err);

      res.json(users);
      console.log("got em", users)
  });
}

function show(req, res, next) {
  var id = req.params.id;

  User.findById(id, function(err, user) {
    if (err) {
      res.send(err);
    }
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
  user.gender      = req.body.selectedItem.name.name;
  user.nationality = req.body.nationality;
  user.status      = req.body.status;
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

function update(req, res) {
  var id = req.params.id;

  User.findById(id, function(err, user) {

    if (err) {
      res.send(err);
    }

    if (req.body.firstName) user.firstName = req.body.firstName;
    if (req.body.lastName) user.lastName = req.body.lastName;
    if (req.body.middleName) user.middleName = req.body.middleName;
    if (req.body.dob) user.dob = req.body.dob;
    if (req.body.gender) user.gender = req.body.gender;
    if (req.body.nationality) user.nationality = req.body.nationality;
    if (req.body.status) user.status = req.body.status;
    if (req.body.pictureUrl) user.pictureUrl = req.body.pictureUrl;

    user.save(function(err, updatedUser) {
      if (err) {
        res.send(err);
      }
      console.log("Updated!");
      res.json(updatedUser);
    });
  });
}

function destroy(req, res) {
  var id = req.params.id;

  User.remove({"_id" : id}, function(err) {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Deleted!'});
  });
}
