/* Magic Mirror
 * Module: Beestat
 *
 */
const NodeHelper = require('node_helper');
var request = require('request');

module.exports = NodeHelper.create({

  start: function () {
    console.log('MMM-Beestat helper started ...');
  },

  getData: function (notification, url) {
      var self = this;
      console.log('requesting:' + url);
      request({ url: url, method: 'GET' }, function (error, response, body) {
        console.log(self.name+": request response="+JSON.parse(error)+" statusCode="+response.statusCode)
          if (!error && response.statusCode == 200) {
            var result = JSON.parse(body);
            console.log(JSON.stringify(result,null,2) );
            if(result.success=='true'){
              self.sendSocketNotification(notification, result.data);
            } else {
              console.log(self.name +" api request failed =>"+ result.data.error_message)
            }
          } else {
              console.log("MMM-Beestat : Could not load data. error="+JSON.stringify(error));
          }
      });
  },

  //Subclass socketNotificationReceived received.
  socketNotificationReceived: function(notification, payload) {
     this.getData(notification, payload);
  }
});
