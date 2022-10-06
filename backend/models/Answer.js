const mongoose = require('mongoose')

const schema = mongoose.Schema({

    assessment: {
        type: mongoose.ObjectId,
        ref: 'Assessment',
        required: true
    },
    question: {
        type: mongoose.ObjectId,
        ref: 'Question',
        required: true
    },
    answer: {
        type: String,
    },
    comment: {
        type: String,
    },
    answered_at: {
        type: Date,
        required: true,
        default: Date.now()
    },

})

module.exports = mongoose.model('Answer', schema, 'answers')