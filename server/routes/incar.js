var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('incar', {
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

  connection.query(`select * from guest_records where car_number = '${req.body.carNum}';`, function (err, rows) {

    console.log(rows);

      if (rows.length === 0) {

      connection.query(`insert into guest_records (id, car_number) VALUES(0,'${req.body.carNum}')`, function (err, rows) {

        if (!err) {

          console.log(rows);

        } else {

          console.log('query error : ' + err);

        }
        res.send('어서오세요~ 환영합니다 ~');

      });

    } else {

      console.log('중복');

      res.send(rows);
    
    };
  });
})

module.exports = router;