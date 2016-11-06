var blueprint = require ('@onehilltech/blueprint')
  , util      = require ('util')
  ;
  
function DefaultController () {
    blueprint.BaseController.call (this);
}

blueprint.controller (DefaultController);

DefaultController.prototype.landing = function () {
    //var self = this;
    
    return function (req, res) {
        return res.render ('login.pug', {});
    };
};

module.exports = exports = DefaultController;