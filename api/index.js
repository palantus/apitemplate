let Router = require("express").Router;
let pets = require('./routes/pets');

module.exports = () => {
	const app = Router();
	pets(app);

	return app
}