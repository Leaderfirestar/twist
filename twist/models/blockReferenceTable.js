var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BlockReferenceSchema = new Schema(
  {// We can use Mongo's randomly generated ID as an identity property
    blockNumber: {type: Number, required: true},
    blockStart: {type: String, required: true},
    blockEnd: {type: String, required: true}
  }
);

BlockReferenceSchema
.virtual('info')
.get(function(){
  return this.blockStart+' - '+this.blockEnd;
});

BlockReferenceSchema
.virtual('number')
.get(function(){
  return this.blockNumber;
});

module.exports = mongoose.model('block', BlockReferenceSchema);