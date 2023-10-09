/* eslint-disable global-require */
module.exports = {
    databaseConnection: require('./connection'),
    TodoRepository: require('./repository/todo.repository'),
};
