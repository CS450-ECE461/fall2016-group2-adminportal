var blueprint = require ('@onehilltech/blueprint')
    , request = require ('supertest')
    , expect = require ('chai').expect
    ;

var appPath = require ('../../fixtures/appPath');

describe ('OrganizationRouter', function () {
    before (function (done) {
        blueprint.testing.createApplicationAndStart(appPath,done)
    });

    describe ('/organization',function() {
        describe ('GET', function () {
            it ('check if this router redirects if there is no token',function (done) {
                request(blueprint.app.server.app)
                    .get('/organization')
                    .expect (302, done);
            });
        });
    });
});