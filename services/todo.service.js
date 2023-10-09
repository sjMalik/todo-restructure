const { TodoRepository } = require('../database');
const { APIError } = require('../utils/app-error');
const FormatData = require('../utils');
const debug = require('debug')('todos:todoService');

class TodoService {
    constructor() {
        this.repository = new TodoRepository();
    }

    async findAll() {
        try {
            const todos = await this.repository.findAll();
            return FormatData(todos);
        } catch (e) {
            debug(e);
            throw new APIError('Data not Found');
        }
    }
}

module.exports = TodoService;
