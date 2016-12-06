var blueprint = require ('@onehilltech/blueprint')
    , request = require ('supertest')
    , expect = require ('chai').expect
    ;

var appPath = require ('../../../fixtures/appPath');

describe ('LoginRouter', function () {
    before (function (done) {
        blueprint.testing.createApplicationAndStart(appPath,done)
    });

    describe ('/login',function() {
        describe ('GET', function () {
            it ('check if this router routed correctly',function (done) {
                request(bluepring.app.server.app)
                    .get('/login')
                    .expect (200, done);
            });
        });
    });
});