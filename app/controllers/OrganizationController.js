var blueprint = require ('@onehilltech/blueprint')
    , request   = require ('superagent')
    ;

function OrganizationController () {
    blueprint.BaseController.call (this);
}

blueprint.controller (OrganizationController);

OrganizationController.prototype.fetch = function () {
    return function (req, res) {
        var token = req.user;

        request
            .get ('localhost:5000/v1/organizations')
            .set  ('Authorization', 'bearer ' + token)
            .end  (function (err, resp) {
                if (err) {
                    console.log (err);
                    return res.status(200).json({message: "Sorry! Unable to Fetch Organizations."});
                } else {

                    // Build list of Organizations
                    var list = {};
                    for (var x in resp.body.organizations){
                        list[x] = resp.body.organizations[x].name;
                    }
                    return res.status(200).json(list);
                }
            });

    };
};


module.exports = exports = OrganizationController;
