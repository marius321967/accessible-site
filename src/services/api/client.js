import axios from 'axios'
import config from '@/config.json'

/**
 * Preconfigured Axios HTTP client for all calls to the API. Configuration is taken from
 * the config file and the auth token for protected routes is added during runtime.
 * 
 * This client is to be used for the integrated application.
 */
export default axios.create({
    baseURL: config.api_root
})