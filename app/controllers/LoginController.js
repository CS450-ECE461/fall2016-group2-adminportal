var blueprint = require ('@onehilltech/blueprint')
  , util      = require ('util')
  ;

function LoginController () {
  blueprint.BaseController.call (this);
}

blueprint.controller (LoginController);

LoginController.prototype.login = function () {
    //This is the function that requests from the api and logs user in
  var self = this;

  return function (req, res) {
    return res.render ('login.pug', {name: req.body.name});
  };
};

module.exports = exports = LoginController;