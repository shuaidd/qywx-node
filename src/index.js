const {httpClient} = require('./utils/http-client')
const {addressBook} = require('../src/address-book')
const {media} = require('../src/media')
const {message} = require('../src/message')

exports.corpApi = function(options) {
    const client = httpClient(options)
    return {
        addressBook: addressBook(client),
        getAccessToken: client.getAccessToken,
        media: media(client),
        message: message(client)
    }
}