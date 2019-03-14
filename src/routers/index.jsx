import Home from "../components/home";
import LCar from "../components/littlecar";
// import TabsT from "../components/tabs";
import ShopCar from "../components/shopcar";
import My from "../components/my";
import NotFound from "../components/notfound";
import BMap from "../components/bmap";

export const routers = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/banner/:shopid',
        component: LCar
    },
    {
        path: '/tabs',
        component: BMap
    },
    {
        path: '/shopcar',
        component: ShopCar
    },
    {
        path: '/goods/:shopid',
        component: LCar
    },
    {
        path: '/my',
        component: My
    },
    {
        path: '*',
        component: NotFound
    }
]