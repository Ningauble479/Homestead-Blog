import { actionTypes } from './action';

export const initialState = {
    banners: [],
    promotions: [],
    instagram: []
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_BANNERS_SUCCESS:
            return {
                ...state,
                ...{ banners: action.payload },
            };
        case actionTypes.GET_INSTAGRAM_SUCCESS:
            return {
                ...state,
                instagram: action.payload,
            };
        default:
            return state;
    }
}

export default reducer;
