const mongoose = require("mongoose")

const esquemaMorto = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    tamanho: {
        type: String,
        required: true
    },
    causa: {
        type: String,
        required: true
    },
    idade: {
        type: Number,
        required: true
    },
});

const Morto = mongoose.model("Morto", esquemaMorto)

module.exports = Morto