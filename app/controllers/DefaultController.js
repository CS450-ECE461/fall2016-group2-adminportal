var blueprint = require ('@onehilltech/blueprint')
  , util      = require ('util')
  ;
  
function DefaultController () {
    blueprint.BaseController.call (this);
}

blueprint.controller (DefaultController);

DefaultController.prototype.landing = function () {
    return function (req, res) {
        return res.redirect ('/login');
    };
};

module.exports = exports = DefaultController;