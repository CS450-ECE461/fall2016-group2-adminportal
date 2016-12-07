var passport = require ('passport')
    ;

function isLoggedIn (req,res,next) {
    if (req.isAuthenticated ())
        return next ();
    res.redirect ('/login');
}

module.exports = exports = {
    '/organization' : {
        use: isLoggedIn,
        get: { action: 'OrganizationController@fetch' }
    }
};
