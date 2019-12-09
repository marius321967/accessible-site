import client from '../../api/client'
import login from './base'

/**
 * Send a login request to the Authentication service to receive a session token
 * @param {object} credentials Object with properties 'username' and 'password'
 * @returns {Promise} Resolves with the the authentication token string
 */
export default credentials => {
    return login(client, credentials);
}