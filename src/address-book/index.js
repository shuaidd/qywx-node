const {user} = require('./user')
const {dept} = require('./dept')
const {tag} = require('./tag')

exports.addressBook = function (client) {
    return {
        userApi: user(client),
        deptApi: dept(client),
        tagApi: tag(client)
    }
}