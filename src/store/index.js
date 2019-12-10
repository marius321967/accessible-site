import Vue from 'vue'
import Vuex from 'vuex'
import apiClient from '@/services/api/client'
import me from '@/services/auth/me'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        auth: {
            token: null,
            profile: null,
        },
        popoverElement: null,
        accessibleMode: false,
    },
    getters: {
        authToken: state => (state.auth.token),
        authProfile: state => (state.auth.profile),
        popoverElement: state => (state.popoverElement),
        accessibleMode: state => (state.accessibleMode),
    },
    mutations: {
        AUTH_SET_TOKEN(state, token) {
            state.auth.token = token;
        },
        AUTH_REMOVE_TOKEN(state) {
            state.auth.token = null;
        },
        AUTH_SET_PROFILE(state, profile) {
            state.auth.profile = profile;
        },
        AUTH_REMOVE_PROFILE(state) {
            state.auth.profile = null;
        },
        POPOVER_SET_ELEMENT(state, element) {
            state.popoverElement = element;
        },
        SET_ACCESSIBLE_MODE(state, value) {
            state.accessibleMode = value;
        }
    },
    actions: {
        authSetToken({ commit, dispatch }, payload) {
            if (payload === null)
                throw new Error('Null payload to authSetToken is not allowed. ' 
                    + 'To remove the authentication token, dispatch authRemoveToken');
                
            commit('AUTH_SET_TOKEN', payload);

            // Add the token header to the API client.
            apiClient.defaults.headers.common['Authorization'] = 'Bearer ' + payload;

            // Store in persistent storage
            localStorage.setItem('auth_token', payload);

            // Load the user profile
            return me().then(profile => dispatch('authSetProfile', profile));
        },
        authRemoveToken({ commit, dispatch }) {
            commit('AUTH_REMOVE_TOKEN');

            // Update the API client.
            delete apiClient.defaults.headers.common['Authorization'];

            // Remove from persistent storage
            localStorage.removeItem('auth_token');

            // Remove the user profile as well
            dispatch('authRemoveProfile');
        },
        // Loads the token from localStorage with key auth_token
        authLoadToken({ dispatch }) {
            const token = window.localStorage.getItem('auth_token');
            if (token) dispatch('authSetToken', token);
        },

        authSetProfile({ commit }, payload) {
            if (payload === null)
                throw new Error('Null payload to authSetProfile is not allowed. ' 
                    + 'To remove the profile, dispatch authRemoveProfile');

            commit('AUTH_SET_PROFILE', payload);
        },
        authRemoveProfile({ commit }) {
            commit('AUTH_REMOVE_PROFILE');
        },
        toggleAccessibleMode({ commit, state }) {
            const currentState = state.accessibleMode;
            commit('SET_ACCESSIBLE_MODE', !currentState);
        }
    },
    modules: {}
})
