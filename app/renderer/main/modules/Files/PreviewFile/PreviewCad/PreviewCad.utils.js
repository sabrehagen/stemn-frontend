import http from 'axios';

const library = {
  authenticate: authenticate,
  getViewStatus: getViewStatus,
  isWebGlSupported: isWebGlSupported,
}

export default library

////////////////////////////////////////////

function authenticate(){
  return http({
    method: 'POST',
    url: `/api/v1/auth/autodesk`,
  }).then(function(response){
    library.accessToken = response.data.token;
    return response
  })
}

function getViewStatus(urn64){
  return http({
    method: 'GET',
    url: `/api/v1/autodesk/info/${urn64}`,
  })
}

function isWebGlSupported(return_context) {
    if (!!window.WebGLRenderingContext) {
        var canvas = document.createElement("canvas"),
             names = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"],
           context = false;

        for(var i=0;i<4;i++) {
            try {
                context = canvas.getContext(names[i]);
                if (context && typeof context.getParameter == "function") {
                    // WebGL is enabled
                    if (return_context) {
                        // return WebGL object if the function's argument is present
                        return {name:names[i], gl:context};
                    }
                    // else, return just true
                    return true;
                }
            } catch(e) {}
        }
        // WebGL is supported, but disabled
        return false;
    }
    // WebGL not supported
    return false;
}
