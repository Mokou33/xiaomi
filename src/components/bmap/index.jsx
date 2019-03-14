import React, {Component} from 'react';
import {connect} from "react-redux";
import {getUserInfo} from "../../actions/cart";


import './index.scss'
import Footer from "../footer";

@connect(
    state=>({shop:state}),
    {getUserInfo}
)

class BMap extends Component {

    componentDidMount() {
        let {getUserInfo} = this.props
        let {BMap,BMAP_STATUS_SUCCESS} =window

        let map = new BMap.Map("allmap");
        let point = new BMap.Point(116.331398,39.897445);
        map.centerAndZoom(point,12);

        let geoc = new BMap.Geocoder();

        let geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function(r){
            if(this.getStatus() === BMAP_STATUS_SUCCESS){
                let mk = new BMap.Marker(r.point);
                map.addOverlay(mk);
                map.panTo(r.point);
                // alert('您的位置：'+r.point.lng+','+r.point.lat);
                let pt = r.point;
                geoc.getLocation(pt, function(rs){
                    let addComp = rs.addressComponents;
                    let info = addComp.province + " " + addComp.city + " " + addComp.district
                    getUserInfo({map:info})
                    // alert(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
                });
            }
            else {
                alert('failed'+this.getStatus());
            }
        },{enableHighAccuracy: true})
    }


    render() {
        return (
            <div>
                <div className={'bmap'} id={'allmap'}>

                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default BMap;