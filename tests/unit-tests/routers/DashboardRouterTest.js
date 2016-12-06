var blueprint = require ('@onehilltech/blueprint')
    , request = require ('supertest')
    , expect = require ('chai').expect
    ;

var appPath = require ('../../fixtures/appPath');

describe ('DashboardRouter', function () {
    before (function (done) {
        blueprint.testing.createApplicationAndStart(appPath,done)
    });

    describe ('/dashboard',function() {
        describe ('GET', function () {
            it ('check if this router redirects when there is no token',function (done) {

                request(blueprint.app.server.app)
                    .get('/dashboard')
                    .expect (302, done);
            });

            it ('check if this router routes correctly when there is a token', function(done) {

                request(blueprint.app.server.app)
                    .post('/login')
                    .send({username : 'test@test.com',
                        password : 'test'})
                    .expect('Location', '/dashboard')

                    ;
                    done();


            });

        });
    });
});
