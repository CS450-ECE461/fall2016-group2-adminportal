var passport      = require ('passport')
  , LocalStrategy = require ('passport-local').Strategy
  ;
  
module.exports = initPassport;

function initPassport (app) {
    
    var opts = {name: 'username',password:'password', session: true};
    passport.use (new LocalStrategy (opts, authorize));
    
    function authorize (username, password, done) {
        var token;
      
        var userData = {
            "username" : username,
            "password" : password
        };
    
        request
            .post('localhost:5000/admin/login')
            .send(userData)
            .end(function (err, resp) {
            if (err) {
                return done (err,false);
            } else {
                token = resp.body.token;
            }
            return done (null,token);
            
        });   
    }
}