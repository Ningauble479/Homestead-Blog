import { actionTypes } from './action';

export const initialState = {
    postDetail: null,
    searchResult: [],
    filterByCategories: [],
    error: false
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_POST_BY_SLUG_SUCCESS:
            return {
                ...state,
                ...{ postDetail: action.data }
            };
        case actionTypes.GET_POSTS_BY_KEYWORD_SUCCESS:
            return {
                ...state,
                searchResult: action.data
            };
        case actionTypes.GET_POSTS_BY_CATEGORY_SUCCESS:
            return {
                ...state,
                filterByCategories: action.data
            };
        default:
            return state;
    }
}

export default reducer;
