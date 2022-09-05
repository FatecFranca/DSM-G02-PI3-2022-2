const mongoose = require('mongoose')

module.exports = function () {
    mongoose.connect('mongodb+srv://joaomiguel:<password>@cluster0.uxcntta.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}