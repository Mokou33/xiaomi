import React, {Component} from 'react';

import './index.scss';
import {addCart, delCart, getGoodsNum} from "../../actions/cart";
import {connect} from "react-redux";
import Footer from "../footer";

@connect(
    state=>({shop:state}),
    {addCart, delCart, getGoodsNum}
)

class ShopCar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            adr: '江苏',
            goods: [],
            count:0,
            price:0,
            map:''
        }
    }
    //减少
    reduceGoods = (index) => {
        let goods = this.state.goods
        let {addCart} = this.props
        let id = goods[index].shopid
        if(goods[index].num){
            goods[index].num --
            this.setState({goods})
            addCart({
                id,
                num: -1
            })
        }

        this.totalPrice()
    }

    // 增加
    addGoods = (index) => {
        // console.log(index)
        let goods = this.state.goods
        let {addCart} = this.props
        let id = goods[index].shopid
        goods[index].num ++
        this.setState({goods})
        addCart({
            id,
            num:1
        })

        this.totalPrice()
    }

    //删除商品
    delGoods = (index) => {
        // console.log(index)
        let goods = this.state.goods
        let {delCart} = this.props
        delCart(goods[index].shopid)
        goods.splice(index,1)
        this.setState({goods})

        this.totalPrice()
    }



    //组件加载完成调用，获取数据
    getData = () => {
        // 获取 redux 里的数据 {id：num}
        let {cartCount} = this.props.shop
        let {goods} = this.state
        let shopid = Object.keys(cartCount)
        shopid.forEach((item, index) => {
            if(!isNaN(item)){ //判断是否为数字，及商品id
                fetch("http://47.100.98.54:9020/api/buygoods/"+item)
                    .then(r=>r.json())
                    .then((res) => {
                        //将数量添加到 state
                        res['num'] = cartCount[item]
                        goods.push(res)
                        this.setState({
                            goods
                        })
                    })
            }
        })
        this.getResult()
    }

    getResult = () => {
        let {cartCount} = this.props.shop
        let timer = setTimeout(() => {
            this.totalPrice()
            clearInterval(timer)
        },200)
        if(cartCount.map){
            this.setState({
                map:cartCount.map
            })
        }
    }

    //计算总价格
    totalPrice = () => {
        let goods = this.state.goods
        let {getGoodsNum} = this.props
        let count = 0
        let price = 0

        for (let key of goods){
            // console.log(key)
            price += key.price * key.num
            count += key.num
        }
        this.setState({
            price,
            count
        })
        getGoodsNum({data:count})
    }

    componentDidMount() {
        this.getData()
    }


    render() {
        let {goods,count,price,map} = this.state
        // console.log(this.props)
        return (
            <div className={'shopcar pd20'}>
                <div className="shopArea mb">
                    <p className="location clearFix" >
                        <span className="fl">送到地点: </span>
                        <span className="fr">{map&&map}</span>
                    </p>
                    {
                        goods.length > 0 && (
                            goods.map((item, index) => {
                                return (
                                    <div key={index} className="shop " >
                                        <div className="shopShow">
                                            <div className="pic ">
                                                <img src={item.picurl} alt={item.title} />
                                            </div>
                                        </div>
                                        <div className="title">{item.title}</div>
                                        <div className="des">{item.des}</div>
                                        <div className="buyNum ">
                                            <p className=" buyfont">{item.symbol} {item.price} </p>
                                            <p className="addNum ">
                                                <button
                                                    className="reduce"
                                                    onClick={this.reduceGoods.bind(this,index)}
                                                >-</button>
                                                <button className="num">{item.num} </button>
                                                <button
                                                    className="add"
                                                    onClick={this.addGoods.bind(this,index)}
                                                >+</button>
                                            </p>
                                            <button
                                                className="del"
                                                onClick={this.delGoods.bind(this,index)}
                                            >删除</button>
                                        </div>
                                    </div>
                                )
                            })
                        )
                    }
                    <div className="totalPrice">
                        <div className="total">
                            <p className="totalMoney">
                                <span className="font">总计:</span> <span>￥ {price}</span>
                            </p>
                            <p className="preferential">
                                总金额￥{price} 优惠￥0.00
                            </p>
                        </div>
                        <div className="goPayment">
                            <span className="font">去结算</span><span className="num">({count}件)</span>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default ShopCar;