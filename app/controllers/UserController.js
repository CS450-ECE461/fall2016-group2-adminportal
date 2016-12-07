var blueprint = require ('@onehilltech/blueprint')
  , request   = require ('superagent')
;

function UserController () {
  blueprint.BaseController.call (this);
}

blueprint.controller (UserController);

UserController.prototype.create = function () {
  return function (req, res) {
    var token = req.user;

    var userData = {
      user: {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        job_title: req.body.job_title,
        role: 'user'
      }
    };

    request
      .post ('localhost:5000/v1/admin/users')
      .send (userData)
      .set  ('Authorization', 'bearer ' + token)
      .end  (function (err, resp) {
        if (err) {
          console.log (err);
          return res.render('dashboard.pug', {message: "Sorry! Unable to create user."})
        } else {
          return res.render('dashboard.pug', {message: "User created!"});
        }
      });

  };
};

UserController.prototype.fetch = function () {
    return function (req, res) {
        var token = req.user;

        request
            .get ('localhost:5000/v1/organizations/users')
            .set  ('Authorization', 'bearer ' + token)
            .end  (function (err, resp) {
                if (err) {
                    return res.status(200).json({message: "Sorry! Unable to find Users."});
                } else {
                    return res.status(200).json(resp.body);
                }
            });

    };
};

module.exports = exports = UserController;
