

const express = require("express");
const mongoose = require("mongoose");
const { mortos } = require("./data");

const app = express();
app.use(express.json());

mongoose
    .connect("mongodb://localhost:27017/funeraria")
    .then(() => console.log("Conectado ao MongoDB com sucesso !!!!"))
    .catch((erro) => console.error("Erro ao conectar ao MongoDB:", erro));

const esquemaMorto = new mongoose.Schema({
    nome: { type: String, required: true },
    tamanho: { type: String, required: true },
    causa: { type: String, required: true },
    idade: { type: Number, required: true },
});

const morto = mongoose.model("Morto", esquemaMorto);

async function registrarMorto(nome, tamanho,causa , idade) {
    try {
        const novoMorto = new morto({ nome, tamanho, causa, idade });
        return await novoMorto.save();
    } catch (erro) {
        console.error("Erro ao registrar morto:", erro);
        throw erro;
    }
}
app.post("/mortos", async (req, res) => {
    try {
        const { nome, tamanho, causa, idade } = req.body;
        const novoMorto = await registrarMorto(nome, tamanho, causa, idade);
        res
            .status(201)
            .json({ mensagem: "Morto registrado com sucesso, parabéns ", morto: novoMorto });
    } catch (erro) {
        res
            .status(500)
            .json({ mensagem: "Erro ao registrar morto", erro: erro.message });
    }
});

async function listarMortos() {
    try {
        return await morto.find();
    } catch (erro) {
        console.error("Erro ao listar mortos:", erro);
        throw erro;
    }
}

app.get("/mortos", async (req, res) => {
    try {
        const mortos = await listarMortos();
        res.status(200).json(mortos);
    } catch (erro) {
        res
            .status(500)
            .json({ mensagem: "Erro ao listar mortos", erro: erro.message });
    }
});

async function atualizarMorto(id, nome, tamanho, causa, idade) {
    try {
        const novoMortinho = await morto.findByIdAndUpdate(
            id,
            { nome, tamanho, causa, idade },
            { new: true, runValidators: true }
        );
        return novoMortinho;
    } catch (erro) {
        console.error("Erro ao editar esse morto:", erro);
        throw erro;
    }
}

app.put("/mortos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, tamanho, causa, idade } = req.body;
        const mortoAtualizado = await atualizarMorto(
            id,
            nome,
            tamanho,
            causa,
            idade
        );
        if (mortoAtualizado) {
            res
                .status(200)
                .json({
                    mensagem: "morto editado com sucesso, parabéns",
                    morto: mortoAtualizado,
                });
        } else {
            res.status(404).json({ mensagem: "Esse morto não foi encontrado" });
        }
    } catch (erro) {
        res
            .status(500)
            .json({ mensagem: "Erro ao editar esse morto", erro: erro.message });
    }
});

async function deletarMorto(id) {
    try {
        const mortoDeletado = await morto.findByIdAndDelete(id);
        return mortoDeletado;
    } catch (erro) {
        console.error("Erro ao excluir esse  morto:", erro);
        throw erro;
    }
}

app.delete("/mortos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const mortoDeletado = await deletarMorto(id);
        if (mortoDeletado) {
            res
                .status(200)
                .json({ mensagem: "morto excluido com sucesso, parabéns ", morto: mortoDeletado });
        } else {
            res.status(404).json({ mensagem: " Esse morto não foi encontrado" });
        }
    } catch (erro) {
        res
            .status(500)
            .json({ mensagem: "Erro ao excluir esse morto", erro: erro.message });
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(` Parabens servidor rodando na porta ${port}`);
});
