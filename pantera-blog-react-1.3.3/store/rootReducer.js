import { combineReducers } from 'redux';
import post from './post/reducer';
import auth from './auth/reducer';
import collection from './collection/reducer';
import media from './media/reducer';
import app from './app/reducer';

export default combineReducers({
    auth,
    post,
    collection,
    media,
    app,
});
