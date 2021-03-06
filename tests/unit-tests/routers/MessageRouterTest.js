var blueprint = require ('@onehilltech/blueprint')
    , request = require ('supertest')
    , expect = require ('chai').expect
    ;

var appPath = require ('../../fixtures/appPath');

describe ('MessageRouter', function () {
    before (function (done) {
        blueprint.testing.createApplicationAndStart(appPath,done)
    });

    describe ('/messages',function() {
        describe ('GET', function () {
            it ('check if this router redirects if there is no token',function (done) {
                request(blueprint.app.server.app)
                    .get('/messages')
                    .expect (302, done);
            });
        });
    });
});