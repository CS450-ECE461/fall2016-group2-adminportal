module.exports = exports = {
    '/loggedin' : {
        get  : { view   : 'loggedin.pug'},
        post : { action : 'LoggedInController@logout'}
    }
};