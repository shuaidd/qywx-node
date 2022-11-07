const {user} = require('./user')
const {dept} = require('./dept')

exports.addressBook = function (client) {
    return {
        userApi: user(client),
        deptApi: dept(client)
    }
}