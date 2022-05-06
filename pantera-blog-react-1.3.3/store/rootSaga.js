import {all} from 'redux-saga/effects';
import PostSaga from './post/saga';
import AuthSaga from './auth/saga';
import CollectionSaga from './collection/saga';
import MediaSaga from './media/saga';
import AppSaga from './app/saga';

export default function* rootSaga() {
    yield all([
        PostSaga(),
        AuthSaga(),
        CollectionSaga(),
        MediaSaga(),
        AppSaga(),
    ]);
}
