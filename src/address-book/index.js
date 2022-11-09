const {user} = require('./user')
const {dept} = require('./dept')
const {tag} = require('./tag')
const {userImport} = require('./import')
const {userExport} = require('./export')
const {linkedCorp} = require('./linkedcorp')

exports.addressBook = function (client) {
    return {
        userApi: user(client),
        deptApi: dept(client),
        tagApi: tag(client),
        importApi: userImport(client),
        exportApi: userExport(client),
        linkedCorpApi: linkedCorp(client)
    }
}