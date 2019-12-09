import client from '../client'

/**
 * @returns {Promise} Resolves with user objects array.
 */
export default () => {
    return client.get('/users')
        .then(response => (response.data))
        .catch(e => {
            throw new Error(e.response ? e.response.data.err : e.message);
        });
}