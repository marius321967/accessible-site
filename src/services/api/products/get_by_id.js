import client from '../client'

/**
 * @returns {Promise} Resolves with product object.
 */
export default id => {
    return client.get('/products/' + id)
        .then(response => (response.data))
        .catch(e => {
            throw new Error(e.response ? e.response.data.err : e.message);
        });
}