import client from '../client'

/**
 * @returns {Promise} Resolves with whatever the API sends back.
 */
export default product => {
    return client.post('/products', product)
        .then(response => (response.data.id))
        .catch(e => {
            throw new Error(e.response ? e.response.data.err : e.message);
        });
}