let shopTools = {}

let shop = JSON.parse(window.localStorage.getItem("shopInfo")||"{}")
// shop 数据结构
//shop => {商品id1：num；商品id2：num}

//更新商品
shopTools.addUpdata = function (goods) {
    // 判断是否存在商品id
    if(shop[goods.id]){
        shop[goods.id] += goods.num
    }else {
        shop[goods.id] = goods.num
    }
    this.saveShops()
}

//删除
shopTools.delete = function (id) {
    delete shop[id]
    this.saveShops()
}

//默认获取商品
shopTools.getShop = function(){
    return JSON.parse(window.localStorage.getItem("shopInfo") || "{}")
}

//储存数据
shopTools.saveShops = function(){
    window.localStorage.setItem("shopInfo",JSON.stringify(shop))
}

export default shopTools