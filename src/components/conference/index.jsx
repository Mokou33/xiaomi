import React, {Component} from 'react';
import {Link} from "react-router-dom";

import './index.scss';

class Conference extends Component {

    state = {
        data:[]
    }

    componentDidMount() {
        fetch("http://47.100.98.54:9020/api/conference")
            .then(r=>r.json())
            .then(res=>{
                this.setState({
                    data: res.data
                })
            })
    }


    render() {
        let data = this.state.data
        return (
            <div className={'conference'}>
                {
                    data.shopid && (
                        <Link to={`/goods/${data.shopid}`}>
                            <img src={data.picurl} alt={data.alt}/>
                        </Link>
                    )
                }
            </div>
        );
    }
}

export default Conference;