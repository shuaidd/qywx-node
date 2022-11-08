const request = require("request");
const fs = require("fs");
exports.media = function(client) {
    return {
        uploadMedia: function(appName,type, formData) {
            return client.submitFormData(appName, `/media/upload?type=${type}`,formData)
        },
        downloadMedia: function(appName,mediaId,outputPath) {
            client.getUrl(appName,'/media/get').then(url=>{
                url = `${url}&media_id=${mediaId}`
                request(url).pipe(fs.createWriteStream(outputPath))
            })
        },
        uploadImage: function(appName,formData) {
          return client.submitFormData(appName, '/media/uploadimg', formData)
        },
        getUploadVoice: function(appName,mediaId,outputPath) {
            client.getUrl(appName,'/media/get/jssdk').then(url=>{
                url = `${url}&media_id=${mediaId}`
                request(url)
                    .on('response',function(response) {
                        console.log(`error-code: ${response.headers['error-code']}--error-message: ${response.headers['error-msg']}`)
                    })
                    .pipe(fs.createWriteStream(outputPath))
            })
        },
        uploadMediaByUrl: function(appName,data) {
            return client.httpPost(appName,'/media/upload_by_url',data)
        },
        getUploadByUrlResult: function(appName,jobId) {
            return client.httpPost(appName,'/media/get_upload_by_url_result',{jobid:jobId})
        }
    }
}