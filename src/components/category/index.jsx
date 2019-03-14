import React, {Component} from 'react';
import {Link} from "react-router-dom";

import './index.scss';

class Category extends Component {

    state = {
        data: []
    }
    componentDidMount() {
        fetch("http://47.100.98.54:9020/api/category")
            .then(r=>r.json())
            .then(res=>{
                this.setState({
                    data:res.data
                })
            })
    }


    render() {
        let data = this.state.data
        // console.log(data)
        return (
            <div >
                <div className={'category'}>
                    {
                        data.length > 0 && data.map((item, index) => {
                            return (

                                <Link
                                    key={item.id}
                                    to={`/goods/${item.shopid}`}
                                >
                                    <img
                                        src={item.picurl}
                                        alt={item.alt}
                                        width={"100%"}
                                    />
                                </Link>
                            )
                        })
                    }
                </div>
                {/*<a href="/"><img src={require('../../static/img/category/category0.png')} alt=""/></a>*/}
                {/*<a href="/"><img src={require('../../static/img/category/category1.png')} alt=""/></a>*/}
                {/*<a href="/"><img src={require('../../static/img/category/category2.png')} alt=""/></a>*/}
                {/*<a href="/"><img src={require('../../static/img/category/category3.png')} alt=""/></a>*/}
                {/*<a href="/"><img src={require('../../static/img/category/category4.png')} alt=""/></a>*/}
                {/*<a href="/"><img src={require('../../static/img/category/category5.png')} alt=""/></a>*/}
                {/*<a href="/"><img src={require('../../static/img/category/category6.png')} alt=""/></a>*/}
                {/*<a href="/"><img src={require('../../static/img/category/category7.png')} alt=""/></a>*/}
                {/*<a href="/"><img src={require('../../static/img/category/category8.png')} alt=""/></a>*/}
                {/*<a href="/"><img src={require('../../static/img/category/category9.png')} alt=""/></a>*/}
            </div>
        );
    }
}

export default Category;