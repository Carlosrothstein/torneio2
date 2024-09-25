const Morto = require("../models/mortos")

async function registrarMorto(req, res) {
    const { nome, tamanho, causa, idade } = req.body
    try {
        const novoMorto = new Morto({ nome, tamanho, causa, idade });
        const mortoSalvo = await novoMorto.save();
        res.status(201).json({
            mensagem: "Morto registrado com sucesso. ",
            morto: mortoSalvo,
        })
    } catch (erro) {
        res.status(500).json({
            mensagem: "Erro ao cadastrar o morto. ",
            erro: erro.mensagem,
        })
    }
}

async function listarMortos(req, res) {
    try {
        const mor = await Morto.find();
        res.status(200).json(mor)
    } catch (erro) {
        res.status(500).json({
            mensagem: "Erro ao listar o morto. ",
            erro: erro.mensagem,
        })
    }
}

async function atualizarMorto(req, res) {
    const { id } = req.params
    const { nome, tamanho, causa, idade } = req.body
    try {
        const novoMortinho = await Morto.findByIdAndUpdate(
            id,
            { nome, tamanho, causa, idade },
            { new: true, runValidators: true }
        );
        if (novoMortinho) {
            res.status(200).json({
                mensagem: "Morto atualizado com sucesso. ",
                morto: novoMortinho,
            })
        } else {
            res.status(404).json({ mensagem: "Morto não encontrado. " })
        }
    } catch (erro) {
        res.status(500).json({
            mensagem: "Erro ao cadastrar o morto. ",
            erro: erro.mensagem,
        })
    }
}

async function deletarMorto(req, res) {
    const { id } = req.params;
    try {
        const mortoDeletado = await Morto.findByIdAndDelete(id);
        if (mortoDeletado) {
            res.status(200).json({
                mensagem: "Morto deletado com sucesso. ",
                morto: mortoDeletado,
            })
        } else {
            res.status(404).json({ mensagem: "Morto não encontrado. " })
        }
    } catch (erro) {
        res.status(500).json({
            mensagem: "erro ao deletar o morto. "
        })
    }
}

module.exports = {
    registrarMorto,
    listarMortos,
    atualizarMorto,
    deletarMorto,
}