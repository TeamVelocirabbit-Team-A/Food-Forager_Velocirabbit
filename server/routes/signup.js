const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js')

router.post('/', userController.createUser, (req, res) => {
    console.log('Create user last middleware hit')
    return res.status(200).json({valid: true})
  })

  module.exports = router;