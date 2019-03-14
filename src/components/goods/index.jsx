import React, {Component} from 'react';
import {Link} from "react-router-dom";


import './index.scss';

class Goods extends Component {
    state = {
        data:[]
    }

    componentDidMount() {
        fetch("http://47.100.98.54:9020/api/goods")
            .then(r=>r.json())
            .then(res=>{
                this.setState({
                    data:res.data
                })
            })
    }


    render() {
        let data = this.state.data;
        return (
            <div className={'goods'}>
                <ul>
                    {
                        data.length > 0 && data.map((item, index) => {
                            return (
                                <li key={item.id}>
                                    <Link to={`/goods/${item.shopid}`}>
                                        <div className={'goods-list'}>
                                            <img src={item.picurl} alt={item.alt}/>
                                        </div>
                                        <div className="pd20">
                                            <p className={'goods-title'}>{item.title}</p>
                                            <p className={'goods-des'}>{item.des}</p>
                                            <p className={'goods-price'}>{item.symbol}{item.price} <span>起</span></p>
                                        </div>
                                    </Link>
                                </li>
                            )
                        })
                    }
                    {/*<li>
                        <Link to="/goods/littlecar1">
                            <div className={'goods-list'}>
                                <img src={require('../../static/img/goods/goods1.jpg')} alt=""/>
                            </div>
                            <div className="pd20">
                                <p className={'goods-title'}>小米8 青春版</p>
                                <p className={'goods-des'}>潮流镜面渐变色，自拍旗舰</p>
                                <p className={'goods-price'}>￥3199 <span>起</span> <del>￥3399</del></p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/goods/littlecar2">
                            <div className={'goods-list'}>
                                <img src={require('../../static/img/goods/goods2.jpg')} alt=""/>
                            </div>
                            <div className="pd20">
                                <p className={'goods-title'}>小米8 青春版</p>
                                <p className={'goods-des'}>潮流镜面渐变色，自拍旗舰</p>
                                <p className={'goods-price'}>￥3199 <span>起</span> <del>￥3399</del></p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/goods/littlecar3">
                            <div className={'goods-list'}>
                                <img src={require('../../static/img/goods/goods3.jpg')} alt=""/>
                            </div>
                            <div className="pd20">
                                <p className={'goods-title'}>小米8 青春版</p>
                                <p className={'goods-des'}>潮流镜面渐变色，自拍旗舰</p>
                                <p className={'goods-price'}>￥3199 <span>起</span> <del>￥3399</del></p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/goods/littlecar4">
                            <div className={'goods-list'}>
                                <img src={require('../../static/img/goods/goods4.jpg')} alt=""/>
                            </div>
                            <div className="pd20">
                                <p className={'goods-title'}>小米8 青春版</p>
                                <p className={'goods-des'}>潮流镜面渐变色，自拍旗舰</p>
                                <p className={'goods-price'}>￥3199 <span>起</span> <del>￥3399</del></p>
                            </div>
                        </Link>
                    </li>*/}
                </ul>
            </div>
        );
    }
}

export default Goods;