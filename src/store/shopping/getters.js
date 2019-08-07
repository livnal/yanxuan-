export default {
    getTotal(state) {
        let total = { price: 0, num: 0 };
        let cars = state.cars;
        cars.forEach(item => {
            total.price += item.SellPrice * item.num;
            total.num += item.num;
        })
        total.price = total.price.toFixed(2);
        return total;
    }
}