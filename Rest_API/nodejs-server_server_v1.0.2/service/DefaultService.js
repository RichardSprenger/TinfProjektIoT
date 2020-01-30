'use strict';


/**
 * Adds a new sensor
 * 
 *
 * body Sensor Sensor object that need to be added
 * no response value expected for this operation
 **/
exports.addSensor = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes a sensor by Id
 * 
 *
 * sensorId Long Sensor id to delete
 * no response value expected for this operation
 **/
exports.deleteSensor = function(sensorId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get Service and Uptime
 * Return the date of last service and the uptime of the machine
 *
 * returns Machine
 **/
exports.getMachine = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "lastservice" : "2000-01-23",
  "uptime" : "uptime"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all sensors
 *
 * returns List
 **/
exports.getSensor = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "name",
  "installationDate" : "2000-01-23T04:56:07.000+00:00",
  "id" : 0,
  "sensorId" : 6
}, {
  "name" : "name",
  "installationDate" : "2000-01-23T04:56:07.000+00:00",
  "id" : 0,
  "sensorId" : 6
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get current value from a sensor
 *
 * sensorId Long ID of sensor
 * returns SensorData
 **/
exports.getSensorById = function(sensorId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "date" : "2000-01-23T04:56:07.000+00:00",
  "type" : 1,
  "value" : 6.027456183070403,
  "sensorId" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get value history for single sensor
 * Returns history for single sensor
 *
 * sensorId Long ID of sensor
 * from String From timestamp (optional)
 * to String To timestamp (optional)
 * since BigDecimal Since number of hours. Only evaluated if neither 'from' nor 'to' supplied. (optional)
 * quantizeTo BigDecimal Quantize to max. number of values. If less values measured, also less values will be returned, i.e. no server-size interpolation. (optional)
 * returns SensorDataHistory
 **/
exports.getSensorHistoryById = function(sensorId,from,to,since,quantizeTo) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "unitOfMeasure" : "unitOfMeasure",
  "values" : [ {
    "date" : "2000-01-23T04:56:07.000+00:00",
    "value" : 0.8008281904610115
  }, {
    "date" : "2000-01-23T04:56:07.000+00:00",
    "value" : 0.8008281904610115
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Updates an existing sensor
 * 
 *
 * body Sensor Sensor object that need to be updated
 * no response value expected for this operation
 **/
exports.updateSensor = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

