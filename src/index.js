const {httpClient} = require('./utils/http-client')
const {addressBook} = require('./address-book')
const {media} = require('./media')
const {message} = require('./message')

exports.corpApi = function(options) {
    const client = httpClient(options)
    return {
        addressBook: addressBook(client),
        getAccessToken: client.getAccessToken,
        media: media(client),
        message: message(client),
        destroy: client.destroy
    }
}