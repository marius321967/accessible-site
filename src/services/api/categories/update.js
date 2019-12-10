import client from '../client'

/**
 * @returns {Promise} Resolves with whatever the API sends back.
 */
export default (id, properties) => {
    return client.post('/categories/'+id, properties)
        .then(response => (true))
        .catch(e => {
            throw new Error(e.response ? e.response.data.err : e.message);
        });
}