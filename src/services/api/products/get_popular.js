import client from '../client'

/**
 * @returns {Promise} Resolves with product objects array.
 */
export default () => {
    return client.get('/products/popular')
        .then(response => (response.data))
        .catch(e => {
            throw new Error(e.response ? e.response.data.err : e.message);
        });
}