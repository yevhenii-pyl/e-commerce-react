import { call, all, takeLatest, put } from 'redux-saga/effects'

import UserActionTypes from '../user/user.types'
import { clearCard } from './card.actions'

export function* clearCardOnSignOut(){
    yield put(clearCard())
}

export function* onSignOutSuccess(){
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCardOnSignOut)
}

export function* cardSagas(){
    yield all([
        call(onSignOutSuccess)
    ])
}