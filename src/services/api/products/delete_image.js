import client from '../client'

/**
 * @param {string} productId
 * @param {string} imageId
 */
export default (productId, imageId) => {
    return client.post('/products/' + productId + '/images/' + imageId + '/delete')
        .then(response => (response.data))
        .catch(e => {
            throw new Error(e.response ? e.response.data.err : e.message);
        });
}