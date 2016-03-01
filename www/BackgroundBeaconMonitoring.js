var exec = require('cordova/exec');

function BackgroundBeaconMonitoring() {

}

BackgroundBeaconMonitoring.prototype.startService = function (api_token, api_user, device_id, api_url, api_version, successCallback, errorCallback) {
  exec(successCallback, errorCallback, "BackgroundBeaconManager", "createService", [api_token, api_user, device_id, api_url, api_version]);
};

BackgroundBeaconMonitoring.prototype.startMonitoringRegion = function (identifier, uuid, major, minor, successCallback, errorCallback) {
  console.log("start monitoring region called");
  exec(successCallback, errorCallback, "BackgroundBeaconManager", "startMonitoringRegion", [identifier, uuid, major, minor]);
};

BackgroundBeaconMonitoring.prototype.stopMonitoringRegion = function (identifier, successCallback, errorCallback) {
  console.log("stop monitroing region called");
  exec(successCallback, errorCallback, "BackgroundBeaconManager", "stopMonitoringRegion", [identifier]);

};

var backgroundBeaconMonitoring = new BackgroundBeaconMonitoring();

module.exports = backgroundBeaconMonitoring;
