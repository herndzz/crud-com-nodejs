const express = require('express');
const router = express.Router();
const Item = require('../models/item');

// Rota para criar um item
router.post('/', (req, res) => {
    const newItem = new Item(req.body);
    newItem.save((err, item) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.status(201).json(item);
    });
});

// Rota para listar todos os itens
router.get('/', (req, res) => {
    Item.find((err, items) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.status(200).json(items);
    });
});

// Rota para atualizar um item
router.put('/:id', (req, res) => {
    Item.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, item) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.status(200).json(item);
    });
});

// Rota para excluir um item
router.delete('/:id', (req, res) => {
    Item.findByIdAndRemove(req.params.id, (err, item) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.status(204).send();
    });
});

module.exports = router;
