import client from '../client'

/**
 * @returns {Promise} Resolves with category objects array.
 */
export default () => {
    return client.get('/categories')
        .then(response => (response.data))
        .catch(e => {
            throw new Error(e.response ? e.response.data.err : e.message);
        });
}