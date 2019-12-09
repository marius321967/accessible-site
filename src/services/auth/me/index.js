import client from '../../api/client'

/**
 * Retrieve information on the token holder - the user.
 * @returns {Promise} Resolves with user object.
 */
export default () => {
    return client.get('/me')
        .then(response => (response.data))
        .catch(e => {
            throw new Error(e.response ? e.response.data.err : e.message);
        });
}