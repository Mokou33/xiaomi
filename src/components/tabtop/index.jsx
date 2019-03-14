import React, {Component} from 'react';
import {Link} from "react-router-dom";

import "./index.scss";


class TabTop extends Component {
    render() {
        return (
            <div className='tabtop pd20'>
                <Link to="/">
                    <i className='iconfont icon-zuojiantou'></i>
                </Link>
                <span>分类</span>
                <i className='iconfont icon-sousuo'></i>
            </div>
        );
    }
}

export default TabTop;