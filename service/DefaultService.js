'use strict';

let users = [{
  id: 0,
  name: "Yusuf",
  surname: "Sirin"
}, {
  id: 1,
  name: "Veli",
  surname: "Bacik"
}]
/**
 *
 * name String 
 * surname String  (optional)
 * no response value expected for this operation
 **/
exports.userAdd = function (name, surname) {
  return new Promise(function (resolve, reject) {
    const user = {
      id: Math.floor(Math.random() * 100),
      name: name,
      surname: surname
    }
    users.push(user)
    resolve(JSON.stringify(users));
  });
}


/**
 *
 * id String 
 * no response value expected for this operation
 **/
exports.userRemove = function (id) {
  return new Promise(function (resolve, reject) {
    users = users.filter((user) => {
      return user.id != parseInt(id);
    })
    resolve(JSON.stringify(users));
  });
}


/**
 *
 * no response value expected for this operation
 **/
exports.usersGet = function () {
  return new Promise(function (resolve, reject) {
    resolve(JSON.stringify(users));
  });
}