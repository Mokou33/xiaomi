import React, {Component} from 'react';

import './index.scss';

import Footer from "../footer";


class My extends Component {
    render() {
        return (
            <div className='my'>
                <div className="header ">
                    <img src={require('../../static/img/my/per.png')} alt=""/>
                    <p>登录/注册</p>
                </div>
                <div className="order">
                    <div className="odl">我的订单</div>
                    <div className="odr">全部订单 &gt;</div>
                </div>
                <div className="info">
                    <div className="pay">
                        <i className='iconfont icon-fukuan'></i>
                        <span>待付款</span>
                    </div>
                    <div className="receve">
                        <i className='iconfont icon-daishouhuo'></i>
                        <span>待收货</span>
                    </div>
                    <div className="repair">
                        <i className='iconfont icon-weixiuoff'></i>
                        <span>退换修</span>
                    </div>
                </div>
                <ul className='vip'>
                    <li className='vt'>
                        <a href="#">
                            <span>会员中心</span>
                            <em>&gt;</em>
                        </a>
                    </li>
                    <li className='vb'>
                        <a href="#">
                            <span>我的优惠</span>
                            <em>&gt;</em>
                        </a>
                    </li>
                </ul>
                <ul className='serve'>
                    <li className='st'>
                        <a href="#">
                            <span>服务中心</span>
                            <em>&gt;</em>
                        </a>
                    </li>
                    <li className='sb'>
                        <a href="/">
                            <span>小米之家</span>
                            <em>&gt;</em>
                        </a>
                    </li>
                </ul>
                <ul className='Fcode'>
                    <li className='Fc'>
                        <a href="#">
                            <span>F码通道</span>
                            <em>&gt;</em>
                        </a>
                    </li>
                </ul>
                <ul className='set'>
                    <li className='Se'>
                        <a href="#">
                            <span>设置</span>
                            <em>&gt;</em>
                        </a>
                    </li>
                </ul>
                <Footer></Footer>
            </div>
        );
    }
}

export default My;