import client from '../../api/client'

/**
 * @param {object} credentials Object with properties 'username' and 'password'
 * @returns {Promise}
 */
export default credentials => {
    return client.post('/register', credentials)
        .then(_ => {return;})
        .catch(e => {
            throw new Error(e.response ? e.response.data.err : e.message);
        });
}