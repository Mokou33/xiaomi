import React, {Component} from 'react';
import {Link} from "react-router-dom";

import './index.scss';


class Recommend extends Component {
    state = {
        data:{}
    }

    componentDidMount() {
        fetch("http://47.100.98.54:9020/api/recommend")
            .then(r=>r.json())
            .then(res=>{
                if (res.status ===200){
                    this.setState({
                        data:res.data
                    })
                }
            })
    }


    render() {
        let {shopid,picurl,alt} = this.state.data
        return (
            <div className={'recommend'}>
                {
                    shopid && (
                        <Link to={`/goods/${shopid}`}>
                            <img src={picurl} alt={alt}  />
                        </Link>
                    )
                }
            </div>
        );
    }
}

export default Recommend;