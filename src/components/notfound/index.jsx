import React, {Component} from 'react';
import {Link} from "react-router-dom";

import './index.scss';



class NotFound extends Component {
    render() {
        return (
            <div className={'notfound'}>
                <img src={require('../../static/img/notfound/404.jpg')} alt=""/>
                <p className="soory">咦~页面不见了~</p>
                <p className="goto">
                    <Link to="/">返回首页</Link>
                </p>
            </div>
        );
    }
}

export default NotFound;