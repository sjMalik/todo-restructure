/* eslint-disable consistent-return */
const TodoService = require('../services/todo.service');
const debug = require('debug')('todos:todoapi');

module.exports = (app) => {
    const service = new TodoService();

    app.get('/todos', async (req, res, next) => {
        try {
            const { data } = await service.findAll();
            debug(data);
            return res.json({
                todos: data,
            });
        } catch (e) {
            debug(e);
            next(e);
        }
    });
};
