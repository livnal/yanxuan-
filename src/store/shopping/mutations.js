import { SYNC_UPDATE } from "./const"
export default {
    [SYNC_UPDATE](state, newCars) {
        state.cars = newCars;
    }
}