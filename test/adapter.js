var deferred = require('../promiseme.js').deferred;
module.exports = {
  fulfilled: function(value){
    var d = deferred();
    d.fulfill(value);
    return d.promise;
  },
  rejected: function(reason){
    var d = deferred();
    d.reject(reason);
    return d.promise;
  },
  pending: function(){
    var d = deferred();
    return {
      promise: d.promise,
      fulfill: d.fulfill,
      reject: d.reject
    }
  }
};
