import { all, put, takeEvery } from 'redux-saga/effects';
import { polyfill } from 'es6-promise';
import { actionTypes, toggleDrawerSuccess, toggleSearchBoxSuccess } from '~/store/app/action';

polyfill();

function* toggleSearchBoxSaga({ payload }) {
    try {
        yield put(toggleSearchBoxSuccess(payload));
    } catch (err) {
        console.log(err);
    }
}

function* toggleDrawerSaga({ payload }) {
    try {
        yield put(toggleDrawerSuccess(payload));
    } catch (err) {
        console.log(err);
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.TOGGLE_SEARCHBOX, toggleSearchBoxSaga)]);
    yield all([takeEvery(actionTypes.TOGGLE_DRAWER, toggleDrawerSaga)]);
}
