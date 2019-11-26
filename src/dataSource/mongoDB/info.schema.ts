import * as mongoose from 'mongoose';

export const InfoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  desc: String
}, {
  timestamps: true
});