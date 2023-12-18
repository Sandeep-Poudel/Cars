import { configureStore } from "@reduxjs/toolkit";
import { addCar, removeCar, carsReducer, changeSearchTerm } from "./slice/carsSlice";
import { changeCost, changeName, formReducer } from "./slice/formSlice";

const store = configureStore({
    reducer: {
        cars: carsReducer,
        form: formReducer
    }
})

export {
    store,
    addCar,
    removeCar,
    changeSearchTerm,
    changeCost,
    changeName
}