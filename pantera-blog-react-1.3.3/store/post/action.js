export const actionTypes = {
    GET_POST_BY_SLUG: 'GET_POST_BY_SLUG',
    GET_POST_BY_SLUG_SUCCESS: 'GET_POST_BY_SLUG_SUCCESS',

    GET_POSTS_BY_KEYWORD: 'GET_POSTS_BY_KEYWORD',
    GET_POSTS_BY_KEYWORD_SUCCESS: 'GET_POSTS_BY_KEYWORD_SUCCESS',

    GET_POSTS_BY_CATEGORY: 'GET_POSTS_BY_CATEGORY',
    GET_POSTS_BY_CATEGORY_SUCCESS: 'GET_POSTS_BY_CATEGORY_SUCCESS'
};

export function getPostDetailBySlug(payload) {
    return { type: actionTypes.GET_POST_BY_SLUG, payload };
}

export function getPostsByKeyWord(payload) {
    return { type: actionTypes.GET_POSTS_BY_KEYWORD, payload };
}

export function getPostsByCategory(payload) {
    return { type: actionTypes.GET_POSTS_BY_CATEGORY, payload };
}

export function getPostDetailBySlugSuccess(data) {
    return {
        type: actionTypes.GET_POST_BY_SLUG_SUCCESS,
        data
    };
}

export function getPostsByKeyWordSuccess(data) {
    return {
        type: actionTypes.GET_POSTS_BY_KEYWORD_SUCCESS,
        data
    };
}

export function getPostsByCategorySuccess(data) {
    return {
        type: actionTypes.GET_POSTS_BY_CATEGORY_SUCCESS,
        data
    };
}
