/**
 * Axios config compiler - helper for functions that send requests to the API.
 */
export default (server, token) => {
    const headers = {};
    
    if (token !== null) 
        headers['Authorization'] = 'Basic ' + token;
        
    return {
        baseURL: server.address,
        headers
    }
}