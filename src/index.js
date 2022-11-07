const {httpClient} = require('../utils/http-client')
const {addressBook} = require('../src/address-book')

exports.corpApi = function(options) {
    const client = httpClient(options)
    return {
        addressBook: addressBook(client)
    }
}