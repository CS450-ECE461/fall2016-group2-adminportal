var passport = require ('passport');

function isLoggedIn (req,res,next) {
    if (req.isAuthenticated ())
        return next ();
    res.redirect ('/login');
}

module.exports = exports = {
    '/createUser' : {
        //use: isLoggedIn,
        get  : { view   : 'createuser.pug'},
        post : { action : 'CreateUserController@createUser'}
    }
};