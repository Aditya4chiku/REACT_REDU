import { REGISTER_SUCCESS, REGISTER_FAILURE, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions/type";

const initialState = {
    token: localStorage.getItem('jwt'),
    loading: true,
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
        case REGISTER_FAILURE:
        case LOGIN_FAILURE:
            return {
                ...state, loading: false, isAuthenticated: false, user: null
            }
        case LOGIN_SUCCESS:
            return {
                ...state, ...payload, isAuthenticated: true, loading: false, success: true
            }
        default: return state
    }
}