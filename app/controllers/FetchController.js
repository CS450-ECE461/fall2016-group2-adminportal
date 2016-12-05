var blueprint = require ('@onehilltech/blueprint')
    , request   = require ('superagent')
    ;

function UserController () {
    blueprint.BaseController.call (this);
}

blueprint.controller (UserController);

UserController.prototype.fetch = function () {
    return function (req, res) {
        var token = req.user;

        request
            .get ('localhost:5000/v1/organizations')
            .set  ('Authorization', 'bearer ' + token)
            .end  (function (err, resp) {
                if (err) {
                    console.log (err);
                    return res.render('dashboard.pug', {message: "Sorry! Unable to Fetch Organizations."})
                } else {

                    // Build list of Organizations
                    var list = "";
                    for (var x in resp.body.organizations){
                        list = list + resp.body.organizations[x].name + ' ';
                    }

                    return res.render('dashboard.pug', {message: list});
                }
            });

    };
};


module.exports = exports = UserController;
