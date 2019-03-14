import React, {Component} from 'react';
import LazyLoad from 'react-lazyload';

import Header from "../header";
import Banner from "../banner";
import Category from "../category";
import Recommend from "../recommend";
import Conference from "../conference";
import Footer from "../footer";
import Goods  from "../goods";



class Home extends Component {
    render() {
        return (
            <div className={'mb'}>
                <Header></Header>
                <Banner></Banner>
                <Category></Category>
                <Recommend></Recommend>
                <Conference></Conference>
                <LazyLoad height = { 200 }>
                    <Goods />
                </LazyLoad>
                <Footer></Footer>
            </div>
        );
    }
}

export default Home;