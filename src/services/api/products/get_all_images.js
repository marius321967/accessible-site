import client from '../client'

/**
 * @returns {Promise}
 */
export default productId => {
    return client.get('/products/' + productId + '/images')
        .then(response => (response.data))
        .catch(e => {
            throw new Error(e.response ? e.response.data.err : e.message);
        });
}