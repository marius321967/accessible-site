import client from '../client'

/**
 * Admin-only route
 * @returns {Promise} Resolves with array of order objects
 */
export default () => {
    return client.get('/admin/orders')
        .then(response => (response.data))
        .catch(e => {
            throw new Error(e.response ? e.response.data.err : e.message);
        });
}