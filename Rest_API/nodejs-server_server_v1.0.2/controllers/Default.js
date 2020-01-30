'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.addSensor = function addSensor (req, res, next) {
  var body = req.swagger.params['body'].value;
  Default.addSensor(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteSensor = function deleteSensor (req, res, next) {
  var sensorId = req.swagger.params['sensorId'].value;
  Default.deleteSensor(sensorId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getMachine = function getMachine (req, res, next) {
  Default.getMachine()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSensor = function getSensor (req, res, next) {
  Default.getSensor()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSensorById = function getSensorById (req, res, next) {
  var sensorId = req.swagger.params['sensorId'].value;
  Default.getSensorById(sensorId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSensorHistoryById = function getSensorHistoryById (req, res, next) {
  var sensorId = req.swagger.params['sensorId'].value;
  var from = req.swagger.params['from'].value;
  var to = req.swagger.params['to'].value;
  var since = req.swagger.params['since'].value;
  var quantizeTo = req.swagger.params['quantizeTo'].value;
  Default.getSensorHistoryById(sensorId,from,to,since,quantizeTo)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateSensor = function updateSensor (req, res, next) {
  var body = req.swagger.params['body'].value;
  Default.updateSensor(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
