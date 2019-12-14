import client from '../client'

/**
 * @returns {Promise} Resolves with { id } object.
 */
export default order => {
    return client.post('/orders', order)
        .then(response => (response.data))
        .catch(e => {
            throw new Error(e.response ? e.response.data.err : e.message);
        });
}