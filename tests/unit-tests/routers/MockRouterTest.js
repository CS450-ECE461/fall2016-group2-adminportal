var blueprint = require ('@onehilltech/blueprint')
    , request = require ('supertest')
    , expect = require ('chai').expect
    ;

var appPath = require ('../../fixtures/appPath');

describe ('MockRouter', function () {
    before (function (done) {
        blueprint.testing.createApplicationAndStart(appPath,done)
    });

    describe ('/mock/loginTest',function() {
        describe ('POST', function () {
            it ('check if this router routed correctly',function (done) {
                request(blueprint.app.server.app)
                    .post('/mock/loginTest')
                    .expect (200, done);
            });
        });
    });
});