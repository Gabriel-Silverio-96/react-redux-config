import { createStore, combineReducers } from "redux";

import CalculatorReducer from "./Calculator/Calculator.reducer";

const rootReducer = combineReducers({
    calculator: CalculatorReducer
});

export const store = createStore(rootReducer);