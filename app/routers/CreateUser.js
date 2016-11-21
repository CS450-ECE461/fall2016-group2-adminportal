var passport = require ('passport')

function isLoggedIn (req,res,next) {
    if (req.isAuthenticated ())
        return next ();
    res.redirect ('/login');
}

module.exports = exports = {
    '/createUser' : {
        use: isLoggedIn,
        get  : { view   : 'dashboard.pug'},
        post : { action : 'DashboardController@logout'}
    }
};