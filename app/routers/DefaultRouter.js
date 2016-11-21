var passport = require ('passport')
    ;

module.exports = exports = {
    '/' : {
        get  : {view   : 'default.pug'},
        post : {action : 'DefaultController@landing'}
    }
};