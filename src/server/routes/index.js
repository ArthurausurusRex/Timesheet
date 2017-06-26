var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

var ctrlLog = require('../controllers/login.controller');
var ctrlReg = require('../controllers/register.controller');
var classicControler = require('../controllers/classic.controller');
//test
router.post('/', function(req, res) {
    res.json({ message: req.body});   
});

// autentification
router.post('/authenticate', ctrlLog.login);

//users
router.post('/users',ctrlReg.create);
router.get('/users', classicControler.listUsers);

//userId

router.get('/users/:userId',classicControler.getUser);
router.put('/users/:userId',classicControler.updateUser);
router.delete('/users/:userId',classicControler.deleteUser);

// users/:UserRole

router.get('/users/role/:role', classicControler.listUsersByRole)



module.exports = router;