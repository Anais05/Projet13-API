const mongoose = require('mongoose')

const accountSchema = new mongoose.Schema(
  {
    userId: Number,
    title: String,
    amount: Number,
    description:String,
  },
  {
    timestamps: true,
    toObject: {
      transform: (doc, ret, options) => {
        ret.id = ret._id
        delete ret._id
        return ret
      }
    }
  }
)

module.exports = mongoose.model('Accounts', accountSchema)