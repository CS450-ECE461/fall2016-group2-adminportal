var passport = require ('passport')
  ;

module.exports = exports = {
  '/users' : {
    post : {
      before : [passport.authenticate ('local', {failureRedirect: '/login'})],
      action : 'UserController@create'
    }
  }
};
