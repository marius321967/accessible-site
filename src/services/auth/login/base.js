/**
 * Send a login request to the Authentication service to receive a session token.
 * 
 * This implementation will attempt to access the /trest directory in the Satcard billing system
 * with a Basic authentication token. The targeted script is specially deployed for this function - 
 * it returns an empty response with a CORS-Allow header.
 * 
 * Upon successful request, the method will return the token without the 'Basic' prefix.
 * @param {object} axios A pre-configured Axios HTTP client
 * @param {object} credentials Object with properties 'username' and 'password'
 * @returns {Promise} Resolves with the the authentication token string
 */
export default (axios, credentials) => {
    return axios.post('/login', credentials)
        .then(response => ( response.data.token ))
        .catch(e => {
            throw new Error(e.response ? e.response.data.err : e.message);
        });
}