module.exports = exports = {
  '/login' : {
    get  : { view   : 'login.pug' },
    post : { action : 'LoginController@login'},
  }
};
