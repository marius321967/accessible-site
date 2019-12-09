import client from '../client'

/**
 * @param {string} productId
 * @param {File} file
 * @param {boolean} accessible
 * @returns {Promise}
 */
export default (productId, file, accessible) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.set('accessible', accessible);

    return client.post('/products/' + productId + '/images', formData)
        .then(response => (response.data))
        .catch(e => {
            throw new Error(e.response ? e.response.data.err : e.message);
        });
}