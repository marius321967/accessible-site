import client from '../client'

/**
 * @returns {Promise} Resolves with { id } object.
 */
export default item => {
    return client.post('/cart', item)
        .then(response => (response.data))
        .catch(e => {
            throw new Error(e.response ? e.response.data.err : e.message);
        });
}