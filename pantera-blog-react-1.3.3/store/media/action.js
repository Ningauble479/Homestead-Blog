export const actionTypes = {
    GET_BANNERS: 'GET_BANNERS',
    GET_BANNERS_SUCCESS: 'GET_BANNERS_SUCCESS',

    GET_PROMOTIONS: 'GET_PROMOTIONS',
    GET_PROMOTIONS_SUCCESS: 'GET_PROMOTIONS_SUCCESS',

    GET_INSTAGRAM: "GET_INSTAGRAM",
    GET_INSTAGRAM_SUCCESS: "GET_INSTAGRAM_SUCCESS",
};

export function getBannersBySlugs(payload) {
    return { type: actionTypes.GET_BANNERS, payload };
}

export function getBannersSuccess(payload) {
    return {
        type: actionTypes.GET_BANNERS_SUCCESS,
        payload,
    };
}

export function getInstagram(payload) {
    return { type: actionTypes.GET_INSTAGRAM, payload };
}

export function getInstagramSuccess(payload) {
    return { type: actionTypes.GET_INSTAGRAM_SUCCESS, payload };
}


