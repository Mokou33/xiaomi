import {createStore} from "redux";

import Reducers from "../reducers/index";


export default function (init) {
    //init 参数是 state 的初始值
    const store = createStore(
        Reducers,
        init,
        window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():undefined
    )
    return store
}