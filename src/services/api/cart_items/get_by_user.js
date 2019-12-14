import client from '../client'

/**
 * @returns {Promise} Resolves with cart item objects array.
 */
export default () => {
    return client.get('/cart')
        .then(response => (response.data))
        .catch(e => {
            throw new Error(e.response ? e.response.data.err : e.message);
        });
}