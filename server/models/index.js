var db = require('../db');
var request = require('request');

module.exports = {
  messages: {
    get: function (req, res) {
      db.query('SELECT * FROM messages', function (err, rows, fields) {
        connection.end();
        if (err) {
          console.log('error in models', err);
        } else {
          console.log('success in models - rows', rows);
          console.log('success in models - fields', fields);
        }
      });
    }, // a function which produces all the messages
    post: function (req, res) {
      // var sql --  message insert
      // db query
      //connection end
      //error message
      // else
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (req, res) {
      db.query('SELECT * FROM users', function (err, rows, fields) {
        connection.end();
        if (err) {
          console.log('error in models', err);
        } else {
          console.log('success in models - rows', rows);
          console.log('success in models - fields', fields);
        }
      });
    },
    post: function () { }
  }
};

