
var mongoose = require('mongoose');

/*
    TODO:   Complete the TransactionSchema which will contain the name,
            reference number, and the amount of a transaction in the database.
*/

var TransactionSchema = new mongoose.Schema({
    name: String,
    refno: String,
    amount: String
});

module.exports = mongoose.model('Transaction', TransactionSchema);
