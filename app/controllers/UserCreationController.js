var blueprint   = require ('@onehilltech/blueprint')
    //, database  = require ('@onehilltech/blueprint-mongodb')
    , util      = require ('util')
    , request   = require ('supertest')

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

        //Step 1a: get _id from request's response
        var userID = res._id;

        //Step 2: Update User Info


        //Step 2a: make a PUT request to API w/ the returned _id
        // and a user with the following (all strings):
        // org_ID (TODO)
        // email
        // username
        // password
        var user = {user: {
                email: req.body.email,
                username: req.body.username,
                password: req.body.password,
                job_title: req.body.job_title,
                org_id: req.body.org_id
            }
        };

        request(apiAddr)
            .post('/users')
            // needs some sort of header something
            .send(user) //This will probably need more overall stuff.
            .end(function(err, res){
                if (err) throw err;
            })

        ;


        // Step 3: Encrypt
        // TODO

        // Step 4: Send the User object to API w/ PUT request

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
