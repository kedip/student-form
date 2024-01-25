import { LOGIN_SUCCESS } from "../actions/userLoginAction";


const initialState = {
    // Define your initial state properties here
    // For example:
    user: null,
    isAuthenticated: false,
    // Add more properties as needed
};



export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            // Handle the state update for login success
            return {
                ...state,
                user: action?.payload
            };

        // Add other cases for different action types if needed

        default:
            return state;
    }
};
