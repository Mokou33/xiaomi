import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

import './index.scss';

@connect(
    state=>({shop:state}),
    {}
)

class Footer extends Component {
    render() {
        // console.log(this.props)
        let num = this.props.shop.cartCount.data
        return (
            <div className={'footer'}>
                <NavLink  exact to="/">
                    <i className={'iconfont icon-shouye'}></i>
                    <span>首页</span>
                </NavLink>
                <NavLink to="/tabs">
                    <i className={'iconfont icon-fenlei'}></i>
                    <span>地图</span>
                </NavLink>
                <NavLink to="/shopcar">
                    <i className={'iconfont icon-gouwuche'}>
                        <em>{num?num:''}</em>
                    </i>
                    <span>购物车</span>
                </NavLink>
                <NavLink to="/my">
                    <i className={'iconfont icon-tubiaolunkuo-'}></i>
                    <span>我的</span>
                </NavLink>
            </div>
        );
    }
}

export default Footer;