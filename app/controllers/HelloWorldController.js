var blueprint = require ('@onehilltech/blueprint')
  , util      = require ('util')
  , request   = require ('supertest')

  ;

function HelloWorldController () {
  blueprint.BaseController.call (this);
}

blueprint.controller (HelloWorldController);

HelloWorldController.prototype.echoName = function () {
  var self = this;

  return function (req, res) {
    return res.render ('helloworld.pug', {name: req.body.name});
  };
};

HelloWorldController.prototype.outside = function () {
  var self = this;
  return function (req, res){

    request('http://localhost:5000')
        .get('/helloworld')
        .end(function (err, res){
          if (err) { return err;}


          return res;
        });

    return res;
  };
};

module.exports = exports = HelloWorldController;
