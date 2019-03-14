import React, {Component} from 'react';
import './index.scss';




class Header extends Component {
    render() {
        return (
            <div className={'head-top pd20'}>
                <div className={'logo'}>
                    <img src={require('../../static/img/header/logo.png')} width={'100%'} height={'100%'} alt=""/>
                </div>
                <div className={'search'}>
                    <i className={'iconfont icon-sousuo'}></i>
                    <span>搜索商品名称</span>
                </div>
                <div className={'login'}>
                    <i className={'iconfont icon-tubiaolunkuo-'}></i>
                </div>
            </div>
        );
    }
}

export default Header;