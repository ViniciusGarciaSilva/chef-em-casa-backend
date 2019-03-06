import express from 'express';
const router = express.Router();

router.get('/', function (req: any, res: any, next: any) { // verificar se a api esta no ar
    res.status(200).send({
        title: "Chefe em casa API",
        version: "0.0.1"
    });
});

module.exports = router;