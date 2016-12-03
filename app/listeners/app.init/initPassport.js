var passport      = require ('passport')
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
    
        request
            .post('localhost:5000/admin/login')
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