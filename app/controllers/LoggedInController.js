var blueprint = require ('@onehilltech/blueprint')
  , util      = require ('util')
  ;
  
function LoggedInController () {
    blueprint.BaseController.call (this);
}

blueprint.controller (LoggedInController);

LoggedInController.prototype.logout = function () {
    //var self = this;
    
    return function (req, res) {
        return res.render ('login.pug', {message : "You have successfully logged in"});
    };
};

module.exports = exports = LoggedInController;