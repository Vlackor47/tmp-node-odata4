'use strict';

let mongoose = require('mongoose');

mongoose.Promise = global.Promise;

module.exports = function(oAppEnv){
  if(oAppEnv.isLocal === true){
      mongoose.connect('mongodb://localhost:27017/test');
   }else{
        let sUser = oAppEnv.services["user-provided"][0].credentials.user,
            sPass = oAppEnv.services["user-provided"][0].credentials.password,
            sUri  = oAppEnv.services["user-provided"][0].credentials.uri,
            sDb   = oAppEnv.services["user-provided"][0].credentials.dbname;

        sUri = sUri.replace("<user>",sUser);
        sUri = sUri.replace("<password>",sPass);
        sUri = sUri.replace("<dbname>",sDb);
       mongoose.connect(sUri);
   }
};
