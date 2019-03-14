import React, {Component} from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import './comment/css/reset.css';

import Layout from "./components/layout";
import {routers} from "./routers";



// import Home from "./components/home";
// import TabsT from "./components/tabs";
// import ShopCar from "./components/shopcar";
// import LCar from "./components/littlecar";
// import My from "./components/my";
// import NotFound from "./components/notfound";



class App extends Component {

    render() {
        return (
            <Router basename={'xiaomi'} >
                <Layout>
                    <Switch>
                        {
                            routers.map((item, index) => {
                                return (
                                    <Route
                                        key={index}
                                        exact={item.exact}
                                        path={item.path}
                                        component={item.component}
                                    ></Route>
                                )
                            })
                        }

                        {/*<Route path={'/'} exact component={Home}></Route>
                        <Route path={'/banner/:shopid'} component={LCar}></Route>
                        <Route path={'/tabs'} component={TabsT}></Route>
                        <Route path={'/shopcar'} component={ShopCar}></Route>
                        <Route path={'/goods/:shopid'} component={LCar}></Route>
                        <Route path={'/my'} component={My}></Route>
                        <Route component={NotFound} ></Route>*/}
                    </Switch>
                </Layout>
            </Router>

        );
    }
}

export default App;
