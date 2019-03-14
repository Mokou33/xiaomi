import shopTools from "../util/carCount";

//购物车功能

export default function (state={},action) {
    let goods = action.data
    let map = action.map
    // console.log(action)
    switch (action.type) {
        case "CART_ADD":
            // console.log(goods)
            shopTools.addUpdata(goods)
            return shopTools.getShop()
        case "CART_DEL":
            shopTools.delete(goods)
            return shopTools.getShop()
        case "CART_GOODS_NUM":
            // console.log(goods )
            let newState = Object.assign({},state,goods)
            return newState
        case "GET_USER_INFO":
            // console.log(map)
            let newMapInfo = Object.assign({},state,map)
            return newMapInfo
        default:
            return shopTools.getShop()
    }
}