import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/ProductSlice"

/*
    Инициализация хранилища: корневой редусер, стор и экспорт типов для TS.
*/

const rootReducer = combineReducers({
    productReducer
});

export const setupStore = () => {
    return configureStore( {
        reducer: rootReducer
    })
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];