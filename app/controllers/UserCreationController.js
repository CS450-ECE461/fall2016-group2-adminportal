var blueprint   = require ('@onehilltech/blueprint')
    //, database  = require ('@onehilltech/blueprint-mongodb')
    , util      = require ('util')
    , request   = require ('superagent')
    , http = require('http')

    ;
var apiAddr = 'http://localhost:5000';

//blueprint.on('app.init', function (app){
//    apiAddr = app.configs.app.api_address;
//});


function UserCreationController () {
    blueprint.BaseController.call (this);
}

blueprint.controller (UserCreationController);

UserCreationController.prototype.createUser = function () {

    return function createUser(req, res) {
        var self = this;

        //step 1: send account creation request to gate keeper on API server
        //TODO

        //Step 1a: get _id (for gatekeeper) from request's response
        //for testing purposes:
        var userID = res._id;

        //Step 2: get user info
        //Step 2a: make a PUT request to API w/ the returned _id
        var user = {user: {
                email: req.body.email,
                username: req.body.username,
                password: req.body.password,
                job_title: req.body.job_title,
                org_id: req.body.org_id
            }
        };


        // create the request
        var result = request
            .post(apiAddr + '/users') // Is a post request to /users

            // Step 4: Send the User object to api server
            .send(user) // sends the request with user information.

            // after we get a response, check if there are errors
            .end(function(err, res){
                if (err) throw err;

                //console.log(res);
                return res;
            })//get back the server response
        ;
        //console.log(result);

        // finally, send the end user to a page saying if the user was created
        return res.render('usercreated.pug', {username: result._data.user.username});


        // Step 3: Encrypt
        // TODO


        // Step 4a: User data as req.body and token as in req.headers
        // Step 4b: send to http:// *addr* :5000/users/:userId

        // maybe do something
    }

    /*
    request('http://localhost:5000')
        .get('/gatekeeper')
        .end(function (err, res){
            if (err) { return err;}


            return res;
        });
        */
};



module.exports = exports = UserCreationController;
