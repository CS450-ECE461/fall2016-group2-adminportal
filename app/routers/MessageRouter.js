/**
 * Created by eburgun on 12/4/16.
 */

var passport = require ('passport')
    ;

function isLoggedIn (req,res,next) {
    if (req.isAuthenticated ())
        return next ();
    res.redirect ('/login');
}

module.exports = exports = {
    '/messages' : {
        use: isLoggedIn,
        get: { action : 'MessageController@fetch'}
    }
};
