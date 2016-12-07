var blueprint     = require ('@onehilltech/blueprint')
  , passport      = require ('passport')
  , LocalStrategy = require ('passport-local').Strategy
  , request       = require ('superagent')
  ;
  
module.exports = initPassport;

function initPassport (app) {
    
    var opts = {name: 'username',password:'password', session: true};
    passport.use (new LocalStrategy (opts, authorize));
    
    function authorize (username, password, done) {
        var token;

        var userData = {
            "email" : username,
            "password" : password
        };

        console.log(app.configs);

        var route = app.configs.apiserver.module.baseuri + '/admin/login';

        if(process.env.NODE_ENV == 'test'){
            route = 'localhost:5001/mock/loginTest';

        }
        request
            .post(route)
            .send(userData)
            .end(function (err, resp) {
                if (err) {
                    if (err.status == '400') {
                        return done (null, false, {message: "Password is incorrect."});
                    } else if (err.status == '403') {
                        return done (null, false, {message: "User is not an admin."});
                    }

                    return done (err, false);
                } else {
                    token = resp.body.token;
                }

                return done (null, token);

        });   
    }
}