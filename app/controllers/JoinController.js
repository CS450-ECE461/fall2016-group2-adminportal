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

      var orgData = {
        "email": req.body.email,
        "name": req.body.name,
        "website": req.body.website,
        "location": req.body.location,
        "industry": req.body.industry
      }

      .post('localhost:5000/v1/admin/organizations')
      .send(orgData)
      .end(function (err, resp) {

                if (err) {
                    console.log(err);
                }
                else if(doc){
                    console.log("Sorry, Organization Already Exists!");
                }
                else {
                    result = resp.body.result;
                    console.log("Organization Successfully Registered");
                }

                if(result){
                    return res.render('login.pug', {message: "Please Check Your Email For Login Info."});
                }
                else{
                    return res.render('join.pug', {message: "We're Sorry, Please Try Again"});
                }
            });

  };

};


module.exports = exports = JoinController;
