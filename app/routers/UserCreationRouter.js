module.exports = exports = {
    '/usercreation' : {
        get  : { view   : 'usercreation.pug' },
        post  : { action : 'UserCreationController@createUser'}

        /* '/:userId' : {
            put :  { action: 'http://localhost:5000/users/:userId'}

        },
        */
    }

};
