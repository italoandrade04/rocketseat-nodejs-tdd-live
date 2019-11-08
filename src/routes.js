const routes = require('express').Router();

const authMiddleware = require('./app/middleware/auth');

const SessionController = require('./app/controllers/SessionController');

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.get('/dashboard', (req, res, next) => {
    return res.status(200).send();
});

// Definição de Rotas

module.exports = routes;
