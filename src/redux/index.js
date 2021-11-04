import {createStore} from "redux";
import {productsReducer} from "../reducers/productsReducer";

export const store = createStore(productsReducer)