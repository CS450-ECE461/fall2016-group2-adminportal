var blueprint = require ('@onehilltech/blueprint')
    , request = require ('supertest')
    , expect = require ('chai').expect
    ;

var appPath = require ('../../fixtures/appPath');

describe ('UserRouter', function () {
    before (function (done) {
        blueprint.testing.createApplicationAndStart(appPath,done)
    });

    describe ('/users',function() {
        describe ('GET', function () {
            it ('check if this router routed correctly',function (done) {
                request(blueprint.app.server.app)
                    .get('/users')
                    .expect (200, done);
            });
        });
    });
});