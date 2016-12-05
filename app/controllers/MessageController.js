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
            .get('localhost:5000/v1/organizations/messages')
            .set('Authorization', 'bearer ' + token)
            .end (function(err,resp){
                if(err) {
                    console.log(err);
                    return res.render('dashboard.pug',{message: "Unable to fetch messages."});
                } else {
                    var messages = {};
                    for (var x in resp.body) {
                        messages[x] = resp.body[x];
                        console.log(resp.body[x].content);
                    }

                    return res.render('dashboard.pug',{messages: messages});
                }
        });
    };
};

module.exports = exports = MessageController;