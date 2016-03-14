var exec = require('cordova/exec');

function BackgroundBeaconMonitoring() {

}

BackgroundBeaconMonitoring.prototype.startService = function (api_token, api_user, device_id, api_url, api_version, sendMovementData, successCallback, errorCallback) {
  exec(successCallback, errorCallback, "BackgroundBeaconManager", "createService", [api_token, api_user, device_id, api_url, api_version, sendMovementData]);
};

BackgroundBeaconMonitoring.prototype.startMonitoringRegion = function (identifier, uuid, major, minor, successCallback, errorCallback) {
  console.log("start monitoring region called");
  exec(successCallback, errorCallback, "BackgroundBeaconManager", "startMonitoringRegion", [identifier, uuid, major, minor]);
};

BackgroundBeaconMonitoring.prototype.stopMonitoringRegion = function (identifier, successCallback, errorCallback) {
  console.log("stop monitroing region called");
  exec(successCallback, errorCallback, "BackgroundBeaconManager", "stopMonitoringRegion", [identifier]);

};

BackgroundBeaconMonitoring.prototype.startRangingRegion = function (identifier, uuid, major, minor, successCallback, errorCallback) {
  console.log("start ranging region called");
  exec(successCallback, errorCallback, "BackgroundBeaconManager", "startRangingRegion", [identifier, uuid, major, minor]);
};

BackgroundBeaconMonitoring.prototype.stopRangingRegion = function (identifier, successCallback, errorCallback) {
  console.log("stop ranging region called");
  exec(successCallback, errorCallback, "BackgroundBeaconManager", "stopRangingRegion", [identifier]);

};

var backgroundBeaconMonitoring = new BackgroundBeaconMonitoring();

module.exports = backgroundBeaconMonitoring;
