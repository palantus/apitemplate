let { Router, Request, Response } = require("express")
const route = Router();
let service = require("../../services/pets")

module.exports = (app) => {

    app.use("/pets", route)

    route.get('/', function(req, res, next) {
        res.json(service.all()).status(200);
    });

    route.post('/', function(req, res, next) {
        res.json(service.add(req.query.name, req.query.breed, req.query.age)).status(200);
    });

    route.get('/:name', function(req, res, next) {
        res.json(service.get(req.params.name)).status(200);
    });
};