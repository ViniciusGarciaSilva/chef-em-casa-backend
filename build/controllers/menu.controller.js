"use strict";
exports.get = function (req, res, next) {
    res.status(200).send('Requisição recebida com sucesso!');
};
exports.getById = function (req, res, next) {
    res.status(200).send('Requisição recebida com sucesso!');
};
exports.post = function (req, res, next) {
    res.status(201).send('Requisição recebida com sucesso!');
};
exports.put = function (req, res, next) {
    var id = req.params.id;
    res.status(201).send("Requisi\u00E7\u00E3o recebida com sucesso! " + id);
};
exports.delete = function (req, res, next) {
    var id = req.params.id;
    res.status(200).send("Requisi\u00E7\u00E3o recebida com sucesso! " + id);
};
