var mongoose = require('mongoose');

 var EventSchema = new mongoose.Schema({
   id: Number,
   lastPosition: Number
 });

mongoose.model('Event', EventSchema);
