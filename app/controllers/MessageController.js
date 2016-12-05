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

MessageController.prototype.fetch = function () {
    return function (req, res) {
        var token = req.user;

        request
            .get('localhost:5000/v1/messages')
            .set('Authorization', 'bearer ' + token)
            .end (function(err,resp){
            if(err) {
                console.log(err);
                return res.render('dashboard.pug',{message: "Unable to fetch messages."});
            } else {
                var list = {};
                for (var x in resp.body.messages) {
                    list[x] = resp.body.messages[x];
                }
                console.log(list);
                return res.render('messages.pug',{list: list});
            }
        });
    };
};

module.exports = exports = MessageController;