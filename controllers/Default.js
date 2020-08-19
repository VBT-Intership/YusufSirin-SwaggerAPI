'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.userAdd = function userAdd (req, res, next) {
  var name = req.swagger.params['name'].value;
  var surname = req.swagger.params['surname'].value;
  Default.userAdd(name,surname)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userRemove = function userRemove (req, res, next) {
  var id = req.swagger.params['id'].value;
  Default.userRemove(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersGet = function usersGet (req, res, next) {
  Default.usersGet()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
