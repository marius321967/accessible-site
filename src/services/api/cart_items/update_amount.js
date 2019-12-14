import client from '../client'

/**
 * @param {string} id ID of the cart item
 * @param {number} amount The new amount.
 * @returns {Promise}
 */
export default (id, amount) => {
    return client.post('/cart/' + id + '/amount', { amount })
        .then(response => (response.data))
        .catch(e => {
            throw new Error(e.response ? e.response.data.err : e.message);
        });
}