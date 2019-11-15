var db = require('../db');
var request = require('request');

module.exports = {
  messages: {
    get: function (req, res) {
      db.query('SELECT * FROM messages', function (err, rows, fields) {
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
      var sql = 'INSERT INTO messages (user, room, content) VALUES (2, 3, \'hello this is my first message\'';
      db.query(sql, function(err, result) {
        if (err) {
          throw err;
        } else {
          console.log('1 record inserted!', result);
        }
      });
      db.end();
    }

  },

  users: {
    // Ditto as above.
    get: function (req, res) {
      db.query('SELECT * FROM users', function (err, rows, fields) {
        if (err) {
          console.log('error in models', err);
        } else {
          console.log('success in models - rows', rows);
          console.log('success in models - fields', fields);
        }
      });
    },
    post: function (req, res) {
      // var sql --  message insert
      var sql = 'INSERT INTO messages (user, room, content) VALUES (2, 3, \'hello this is my first message\'';
      db.query(sql, function(err, result) {
        if (err) {
          throw err;
        } else {
          console.log('1 record inserted!', result);
        }
      });
      db.end();
    }
  }
};

