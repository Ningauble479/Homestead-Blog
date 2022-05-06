import {all, put, takeEvery, call} from 'redux-saga/effects';
import { polyfill } from 'es6-promise';
import {actionTypes, getPostDetailBySlugSuccess, getPostsByKeyWordSuccess} from "~/store/post/action";
import PostRepository from "~/repositories/PostRepository";

polyfill();

function* getPostDetailBySlug({payload}) {
    try {
        const data = yield call(
            PostRepository.getPostBySlug,
            payload
        );
        yield put(getPostDetailBySlugSuccess(data));
    } catch (err) {
        console.log(err);
    }
}

function* getPostItemsByKeywordSaga({payload}) {
    try {
        const data = yield call(
            PostRepository.getPostItemsByKeyword,
            payload
        );
        yield put(getPostsByKeyWordSuccess(data));
    } catch (err) {
        console.log(err);
    }
}

function* getPostItemsByCategory({payload}) {
    try {
        const data = yield call(
            PostRepository.getPostItemsByCategory,
            payload
        );
        console.log(data);
        yield put(getPostsByKeyWordSuccess(data));
    } catch (err) {
        console.log(err);
    }
}

export default function* rootSaga() {
    yield all([
      takeEvery(actionTypes.GET_POST_BY_SLUG, getPostDetailBySlug),
      takeEvery(actionTypes.GET_POSTS_BY_KEYWORD, getPostItemsByKeywordSaga),
      takeEvery(actionTypes.GET_POSTS_BY_CATEGORY, getPostItemsByCategory),

    ]);
}
