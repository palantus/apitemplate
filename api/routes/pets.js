let { Router, Request, Response } = require("express")
const route = Router();
let service = require("../../services/pets")

module.exports = (app) => {

    app.use("/pets", route)

    route.get('/', function(req, res, next) {
        res.json(service.all())
    });

    route.post('/', function(req, res, next) {
        res.json(service.add(req.query.name, req.query.breed, req.query.age))
    });

    route.get('/:name', function(req, res, next) {
        res.json(service.get(req.params.name))
    });
};