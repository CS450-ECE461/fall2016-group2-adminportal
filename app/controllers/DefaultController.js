var blueprint = require ('@onehilltech/blueprint')
  , util      = require ('util')
  ;
  
function DefaultController () {
    blueprint.BaseController.call (this);
}

blueprint.controller (DefaultController);

DefaultController.prototype.landing = function () {
<<<<<<< HEAD
    
    
    return function (req, res) {
        return res.redirect ('/login');
=======
    
    return function (req, res) {
        return res.render ('login.pug', {message: "Welcome to Hive Login"});
>>>>>>> issue15
    };
};

module.exports = exports = DefaultController;