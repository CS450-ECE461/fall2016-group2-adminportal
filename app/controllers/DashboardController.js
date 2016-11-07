var blueprint = require ('@onehilltech/blueprint')
  , util      = require ('util')
  ;
  
function DashboardController () {
    blueprint.BaseController.call (this);
}

blueprint.controller (DashboardController);

DashboardController.prototype.logout = function () {

    return function (req, res) {
        req.logout ();
        return res.redirect ('/login');
    };
};

module.exports = exports = DashboardController;