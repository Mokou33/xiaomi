import React, {Component} from 'react';
import {Link} from "react-router-dom";

import { Carousel} from 'antd';

import 'antd/lib/carousel/style/index.css'
import './index.scss'

class Banner extends Component {

    // state = {
    //     data: ['1', '2', '3'],
    // }
    state = {
        data:[]
    }

    componentDidMount() {
        fetch("http://47.100.98.54:9020/api/banner")
            .then(r=>r.json())
            .then(res=>{
                // console.log(res)
                this.setState({
                    data:res.data
                })

            })
    }

    render() {
        let data = this.state.data;
        // let {picurl, id, shopid,alt} = data;
        // console.log(data)
        return (
            <div>
                <Carousel
                    autoplay={true}
                >
                    {data.length >0 && data.map((item,index )=> {
                        return(

                            <Link
                                key={item.id}
                                to={`banner/${item.shopid}`}
                                style={{display: 'inline-block', width: '100%'}}
                            >
                                <img
                                    src={item.picurl}
                                    alt={item.alt}
                                    style={{width: '100%', verticalAlign: 'top'}}
                                />
                            </Link>
                        )
                    })}

                </Carousel>
            </div>
        );
    }
}

export default Banner;