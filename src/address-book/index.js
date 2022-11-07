const {user} = require('./user')

exports.addressBook = function (client) {
    return {
        userApi: user(client)
    }
}