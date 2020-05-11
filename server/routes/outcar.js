var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('outcar', {
    title: 'Express'
  });
});

router.post('/', function (req, res) {
  var mysql = require('mysql2');

  var connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'alswns23',
    database: 'parking',
    dateStrings: 'date'
  });

  connection.connect();

  console.log(req.body.carNum);

  connection.query(`select * from guest_records where car_number = '${req.body.carNum}';`, function (err, row) {

    console.log(row);

    if (row.length === 1) {

      connection.query(`delete from guest_records where car_number = '${req.body.carNum}';`, function (err, rows) {

        if (!err) {

          console.log(rows);

        } else {

          console.log('query error : ' + err);

        }

        res.send(row);
     
      });

    } else {

      console.log('없는차량.')
      
      res.send(false);

    }
  })
});

module.exports = router;