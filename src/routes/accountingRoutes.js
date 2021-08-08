const express = require('express');
const router = express.Router();

/**
 * 
 * IMPORT EXPORTED FUNCTIONS FROM ACCOUNTHANDLER
 * 
 */
const accountHandler = require('../handlers/accountHandler');

router.post('/accounting_classes', accountHandler.postAccountingClassHandler);

router.get('/accounting_classes', accountHandler.getAccountingClassHandler);

module.exports = router;
