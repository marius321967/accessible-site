import client from '../client'

/**
 * @returns {Promise} Resolves with category object.
 */
export default id => {
    return client.get('/categories/' + id)
        .then(response => (response.data))
        .catch(e => {
            throw new Error(e.response ? e.response.data.err : e.message);
        });
}