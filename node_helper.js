/* Magic Mirror
 * Module: Beestat
 *
 */
const NodeHelper = require('node_helper');
var request = require('request');

module.exports = NodeHelper.create({
data: {  //  is an object
               "29249277": {
                    "runtime_thermostat_summary_id": 29249277,
                    "user_id": 18261,
                    "thermostat_id": "XXXXXX",
                    "date": "2022-03-07",
                    "count": 124,
                    "sum_compressor_cool_1": 0,
                    "sum_compressor_cool_2": 0,
                    "sum_compressor_heat_1": 0,
                    "sum_compressor_heat_2": 0,
                    "sum_auxiliary_heat_1": 3600,
                    "sum_auxiliary_heat_2": 1335,
                    "sum_fan": 8070,
                    "sum_humidifier": 15,
                    "sum_dehumidifier": 0,
                    "sum_ventilator": 0,
                    "sum_economizer": 0,
                    "sum_degree_days": 0,
                    "avg_outdoor_temperature": 33.5,
                    "avg_outdoor_humidity": 83,
                    "min_outdoor_temperature": 31.4,
                    "max_outdoor_temperature": 36.3,
                    "avg_indoor_temperature": 68.4,
                    "avg_indoor_humidity": 38,
                    "deleted": false
                },
                "29249278": {
                    "runtime_thermostat_summary_id": 29249278,
                    "user_id": 18261,
                    "thermostat_id": "XXXXXX1",
                    "date": "2022-03-08",
                    "count": 287,
                    "sum_compressor_cool_1": 0,
                    "sum_compressor_cool_2": 0,
                    "sum_compressor_heat_1": 0,
                    "sum_compressor_heat_2": 0,
                    "sum_auxiliary_heat_1": 11250,
                    "sum_auxiliary_heat_2": 0,
                    "sum_fan": 18150,
                    "sum_humidifier": 5010,
                    "sum_dehumidifier": 0,
                    "sum_ventilator": 0,
                    "sum_economizer": 0,
                    "sum_degree_days": 0,
                    "avg_outdoor_temperature": 32,
                    "avg_outdoor_humidity": 75,
                    "min_outdoor_temperature": 27.1,
                    "max_outdoor_temperature": 36.5,
                    "avg_indoor_temperature": 68.2,
                    "avg_indoor_humidity": 36,
                    "deleted": false
                },
  },
  start: function () {
    console.log(this.file+' helper started ...');
    console.log("config="+JSON.stringify(config,null,2))
  },

  getData: function (notification, url) {
      var self = this;
      console.log('requesting:' + url);
      request({ url: url, method: 'GET' }, function (error, response, body) {
        console.log(self.name+": request response="+JSON.parse(error)+" statusCode="+response.statusCode)
          if (!error && response.statusCode == 200) {
            var result = JSON.parse(body);
            console.log(JSON.stringify(result,null,2) );
            self.sendSocketNotification(notification, result.data);
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
