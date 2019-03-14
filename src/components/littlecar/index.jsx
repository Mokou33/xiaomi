import React, {Component} from 'react';
import {connect} from "react-redux";
import {addCart} from "../../actions/cart";
import GoodsDetails from "../goodsdetails";


import './index.scss';
//装饰器配置
@connect(
    state => ({shop: state}),
    {addCart}
)

class LCar extends Component {

    state = {
        data: {},
        num: 0,
        id:0
    }

    componentDidMount() {

        let id = this.props.match.params.shopid
        fetch(`http://47.100.98.54:9020/api/buygoods/` + id)
            .then(r=>r.json())
            .then(res=>{
                // console.log(res)
                this.setState({
                    data: res,
                    id
                })
            })
        //
        // console.log(this.props)
    }
    //减少商品
    reduceGoods = () => {
        let num = this.state.num
        num = num?(--num):num
        this.setState({num})
    }

    //增加商品
    addGoods = () => {
        let num = this.state.num
        num++
        this.setState({num})
    }

    //提交到购物车
    submitRedux = () => {
        let {num,id} = this.state
        let {addCart} = this.props
        num && (
            addCart({
                id,
                num
            })
            // console.log("提交到购物车")
        )
    }


    render() {
        let data = this.state.data
        return (
            <div>
                <div className="shopdedatils">
                    <img src={data.picurl} width="100%" alt={data.title}/>
                    <div className="bot pd20">
                        <h3>{data.title}</h3>
                        <h3>{data.des}</h3>
                        <p className="money">
                            <span className="symbol">{data.symbol}</span>
                            <span className="price">{data.price}</span>
                        </p>
                        <p className="courier">快递：包邮 <span className="fr" ></span></p>
                        <div className="buyNum clearFix">
                            <p className="fl buyfont">购买数量</p>
                            <p className="addNum fr">
                                <button
                                    className="reduce"
                                    onClick={this.reduceGoods}
                                >-</button>
                                <button  className="num">{this.state.num}</button>
                                <button
                                    className="add"
                                    onClick={this.addGoods}
                                >+</button>
                            </p>
                        </div>
                        {/*<div className="buy">
                            <a href="javascript:;" className="addCart" >加入购物车</a>
                            <a href="/" className="nowBuy">立即购买</a>
                        </div>*/}
                    </div>
                </div>
                <GoodsDetails submitRedux={this.submitRedux}></GoodsDetails>
            </div>
        );
    }
}

export default LCar;