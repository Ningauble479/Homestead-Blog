export const actionTypes = {
    TOGGLE_SEARCHBOX: 'TOGGLE_SEARCHBOX',
    TOGGLE_SEARCHBOX_SUCCESS: 'TOGGLE_SEARCHBOX_SUCCESS',

    TOGGLE_DRAWER: "TOGGLE_DRAWER",
    TOGGLE_DRAWER_SUCCESS: "TOGGLE_DRAWER_SUCCESS",

};

export function toggleSearchBox(payload) {
    return { type: actionTypes.TOGGLE_SEARCHBOX, payload };
}

export function toggleSearchBoxSuccess(payload) {
    return {
        type: actionTypes.TOGGLE_SEARCHBOX_SUCCESS,
        payload,
    };
}

export function toggleDrawer(payload) {
    return { type: actionTypes.TOGGLE_DRAWER, payload };
}

export function toggleDrawerSuccess(payload) {
    return {
        type: actionTypes.TOGGLE_DRAWER_SUCCESS,
        payload,
    };
}

