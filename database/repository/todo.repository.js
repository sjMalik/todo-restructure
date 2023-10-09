/* eslint-disable class-methods-use-this */
const { TodoModel } = require('../models');
const { APIError, STATUS_CODE } = require('../../utils/app-error');
const debug = require('debug')('todos:todorepository');

class TodoRepository {
    async findAll() {
        try {
            const todos = await TodoModel.find({});
            return todos;
        } catch (e) {
            debug('LOL', e);
            throw new APIError(
                'API Error',
                STATUS_CODE.INTERNAL_ERROR,
                'Unable to get Todos',
            );
        }
    }
}

module.exports = TodoRepository;
