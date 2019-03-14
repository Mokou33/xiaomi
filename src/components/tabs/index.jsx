import React, {Component} from 'react';
import { Tabs } from 'antd';

import './index.scss';

import TabTop from "../tabtop";

import Footer from "../footer";


import 'antd/lib/tabs/style/index.css'

const TabPane = Tabs.TabPane;

class TabsT extends Component {
    render() {
        return (
            <div className='tabs'>
                <TabTop></TabTop>
                <Tabs defaultActiveKey="1" tabPosition="left">
                    <TabPane tab="新品" key="1">假装这是一个新品页面</TabPane>
                    <TabPane tab="众筹" key="2">假装这是一个众筹页面</TabPane>
                    <TabPane tab="手机" key="3">假装这是一个手机页面</TabPane>
                    <TabPane tab="电视" key="4">假装这是一个电视页面</TabPane>
                    <TabPane tab="电脑" key="5">假装这是一个电脑页面</TabPane>
                    <TabPane tab="家电" key="6">假装这是一个家电页面</TabPane>
                    <TabPane tab="路由" key="7">假装这是一个路由页面</TabPane>
                    <TabPane tab="出行" key="8">假装这是一个出行页面</TabPane>
                </Tabs>
                <Footer></Footer>
            </div>
        );
    }
}

export default TabsT;