var blueprint = require ('@onehilltech/blueprint'), path = require ('path')
  ;

module.exports = exports = {
  protocols : {
    http : {
      port: 5001
    }
  },

  statics : [
  path.resolve(__dirname,'../../public_html')
  ],
  
  middleware : {
    validator  : { },
    bodyParser : {
      urlencoded : { extended: false },
      json : { }
    },

    morgan: {
      format: 'dev',
      immediate: true
    },

    passport: {
      session: {
        serializer: function (token, done) {
          return done (null, token);
        },
        deserializer: function (token, done) {
          return done (null, token);
        }
      }
    },

    session: {
      secret: 'ssshhhhh',
      resave: false,
      saveUninitialized: true,
      cookie: { secure: false }
    }
  }
};
