import { actionTypes } from './action';

export const initialState = {
    isSearchBoxShow: false,
    isDrawerShow: false

};

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.TOGGLE_SEARCHBOX_SUCCESS:
            return {
                ...state,
                isSearchBoxShow: action.payload,
            };
        case actionTypes.TOGGLE_DRAWER_SUCCESS:
            return {
                ...state,
                isDrawerShow: action.payload,
            };
        default:
            return state;
    }
}

export default reducer;
