import { REGISTER_SUCCESS, REGISTER_FAILURE, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, USER_LOADED } from "../actions/type";

const initialState = {
    token: localStorage.getItem('jwt'),
    loading: false,
    success: false,
    user: null,
    isAuthenticated: false
}
export default function (state = initialState, action) {
    console.log(action.paylaod)
    const { type, payload } = action;
    console.log("I am payload come from ", payload)
    switch (type) {
        case REGISTER_SUCCESS:
            return {
                ...state, ...payload, loading: false, isAuthenticated: false
            }
        case USER_LOADED:
            return {
                ...state, isAuthenticated: true, user: payload, loading: false
            }

        case REGISTER_FAILURE:
        case LOGIN_FAILURE:
            return {
                ...state, loading: false, isAuthenticated: false, user: null
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('jwt', payload.token)
            localStorage.setItem('auth', payload.token)
            return {
                ...state, ...payload, isAuthenticated: true, loading: false, success: true
            }
        case LOGOUT:
            localStorage.removeItem('jwt');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null
            }
        default: return state
    }
}