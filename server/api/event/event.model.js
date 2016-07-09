'use strict';

import mongoose from 'mongoose';

var EventSchema = new mongoose.Schema({
  name: String,
  creator: mongoose.Schema.Types.ObjectId,
  active: Boolean
});

export default mongoose.model('Event', EventSchema);
