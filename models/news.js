/**
 * Created with JetBrains WebStorm.
 * User: Santhosh
 * Date: 21/4/14
 * Time: 9:48 PM
 * To change this template use File | Settings | File Templates.
 */
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var NewsSchema = new Schema({title: String, description: String});
module.exports = mongoose.model('News', NewsSchema);