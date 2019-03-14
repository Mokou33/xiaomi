import {combineReducers} from "redux";

import cartCount from "./cartCount";
import user from "./user";


export default combineReducers({
    cartCount,
    user
})




//  把一个由多个不同的 reducer 函数 作为 value 的 object合并成一个最终的reducer函数
//  然后就可以对这个reducer调用createStore