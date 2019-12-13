import client from '../client'

/**
 * Delete a cart item by its ID.
 * @returns {Promise} 
 */
export default id => {
    return client.post('/cart/' + id + '/delete')
        .then(response => (response.data))
        .catch(e => {
            throw new Error(e.response ? e.response.data.err : e.message);
        });
}