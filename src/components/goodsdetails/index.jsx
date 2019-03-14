import React, {Component} from 'react';
import {Link} from "react-router-dom";

import './index.scss';



class GoodsDetails extends Component {



    render() {
        // console.log(this.props)
        // let num = this.props.shop.cartCount.data
        return (
            <div className={'lCar'}>

                <div className="left">
                    <Link to="/">
                        <i className={'iconfont icon-shouye'}></i>
                        <span>首页</span>
                    </Link>
                    <Link to="/shopcar">
                        <i className={'iconfont icon-gouwuche'}>
                            {/*<em>{num}</em>*/}
                        </i>
                        <span>购物车</span>
                    </Link>

                </div>
                <div className="right">
                    <i
                        onClick={this.props.submitRedux}
                    >加入购物车</i>
                </div>
            </div>
        );
    }
}

export default GoodsDetails;