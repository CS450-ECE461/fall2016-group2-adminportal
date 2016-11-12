var blueprint = require ('@onehilltech/blueprint')
  , util      = require ('util')
  ;

function JoinController () {
  blueprint.BaseController.call (this);
}

blueprint.controller (JoinController);


module.exports = exports = JoinController;
