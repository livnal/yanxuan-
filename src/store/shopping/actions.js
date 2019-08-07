import { SYNC_UPDATE } from "./const"
export default {
    initCars({ commit }) {
        let cars = getCar()
        commit(SYNC_UPDATE, cars)
    },
    //添加商品到购物车
    addGoodInCars({ commit }, good) { // cars=[{id,XX,num:1},{}]
        setTimeout(() => {
            //获取后端返回来的购物车
            let cars = getCar();
            let isHas = cars.some((item) => {
                if (item.CommodityId === good.CommodityId) { //说明添加到购物车的商品在购物车里面已经存在了
                    item.num++
                        return true;
                }
            })
            if (!isHas) { //说明购物车里面不存在你传递来的good这个商品
                good.num = 1;
                cars.push(good)
            }
            //通知后端同步的更改car的值
            localStorage.cars = JSON.stringify(cars)
                //多组件之间要共享cars  vuex这边也需要同步一下
            commit(SYNC_UPDATE, cars)

        }, 1000);
    },
    //减少商品
    reduceGoodInCars({ commit }, good) {
        let cars = getCar()
        cars = cars.filter(item => {
                if (item.CommodityId === good.CommodityId) {
                    item.num--
                        if (item.num <= 0) return false; //返回false代表之间从数组里面删除此元素
                }
                return true;
            })
            //通知后端同步的更改car的值
        localStorage.cars = JSON.stringify(cars)
            //多组件之间要共享cars  vuex这边也需要同步一下
        commit(SYNC_UPDATE, cars)
    }
}


//本地存储模拟后端返回的购物车
function getCar() {
    return JSON.parse(localStorage.cars ? localStorage.cars : '[]')
}