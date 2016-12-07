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
            .get (blueprint.app.configs.apiserver.module.baseuri + '/v1/organizations')
            .set  ('Authorization', 'bearer ' + token)
            .end  (function (err, resp) {
                if (err) {
                    console.log (err);
                    return res.status(200).json({message: "Sorry! Unable to Fetch Organizations."});
                } else {
                    return res.status(200).json(resp.body.organizations);
                }
            });
    };
};

module.exports = exports = OrganizationController;
