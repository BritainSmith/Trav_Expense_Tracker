
// @desc Get all transactions
// @route  GET/api/v1/transactions
// @access public
exports.getTransactions = (req, res, next) =>{
    res.send('GET transactions');
}


// @desc Add a Transaction
// @route  POST/api/v1/transactions
// @access public
exports.addTransaction = (req, res, next) =>{
    res.send('POST transaction');
}



// @desc DELETE transactions
// @route  DELETE/api/v1/transactions
// @access public
exports.deleteTransaction = (req, res, next) =>{
    res.send('DELETE transaction');
}