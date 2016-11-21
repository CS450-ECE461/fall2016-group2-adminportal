var passport = require ('passport')
  ;


module.exports = exports = {
    '/join' : {
        get  : {view   : 'join.pug'},
        post : {action : 'JoinController@join'}
    }

};
