var blueprint = require ('@onehilltech/blueprint')
    , request = require ('superagent')
    ;

function MessageController () {
    blueprint.BaseController.call (this);
}

blueprint.controller(MessageController);

MessageController.prototype.fetch = function () {
    return function (req, res) {
        var token = req.user;

        request
            .get(blueprint.app.configs.apiserver.module.baseuri + '/v1/admin/organizations/messages')
            .set('Authorization', 'bearer ' + token)
            .end (function(err,resp){
                if(err) {
                    console.log(err);
                    return res.render('dashboard.pug',{message: "Unable to fetch messages."});
                } else {
                    return res.status(200).json(resp.body);
                }
        });
    };
};

module.exports = exports = MessageController;