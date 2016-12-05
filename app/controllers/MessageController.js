/**
 * Created by eburgun on 12/4/16.
 */
var blueprint = require ('@onehilltech/blueprint')
    , request = require ('superagent')
    ;

function MessageController () {
    blueprint.BaseController.call (this);
}

blueprint.controller(MessageController);

