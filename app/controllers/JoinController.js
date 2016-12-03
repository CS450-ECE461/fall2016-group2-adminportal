var blueprint = require ('@onehilltech/blueprint')
    request   = require ('superagent')
  , util      = require ('util')
  ;

function JoinController () {
  blueprint.BaseController.call (this);
}

blueprint.controller (JoinController);

JoinController.prototype.join = function () {

  var self= this;

  return function (req, res) {

      var organization = {
        "name": req.body.name,
        "website": req.body.website,
        "location": req.body.location,
        "industry": req.body.industry
      }

      var user = {
          "email": req.body.email,
      }

      request
        .post('localhost:5000/organizations')
        .send({organization: organization,user: user})
        .end(function (err, resp) {

                if (err) {
                    console.log(err);
                }
                else {
                    console.log("Organization Successfully Registered");
                    return res.render('login.pug', {message: "Please Check Your Email For Login Info."});
                }
            });

  };

};


module.exports = exports = JoinController;
