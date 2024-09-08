import { IProduct } from "../../types/mockTypes"
import data from "../../data/mock.json";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/*
    Состояния программы
    products - продукты, полученные из mock
    sorting - вид сортировки asc/desc или никакая (undefined)
    interacted - сейфгард, чтобы поля не перезаписывали ссылку из состояния при запуске

    Три функции редусера для установки фильтра, сортировки и интеракции
*/

interface ProductsState {
    products: IProduct [],
    sorting: string | undefined,
    filter: number | undefined,
    interacted:  boolean
}

const initialState: ProductsState = {
    products: data.products,
    sorting: undefined,
    filter: undefined,
    interacted: false
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setFilter(state, action: PayloadAction<string | number>){
            state.filter = Number(action.payload);
        },
        setSorting(state, action: PayloadAction<string>){
            state.sorting = action.payload;
        },
        setInteracted(state){
            state.interacted = true;
        }
    }
})

export default productsSlice.reducer;