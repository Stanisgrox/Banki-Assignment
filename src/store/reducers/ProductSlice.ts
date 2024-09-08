import { IProduct } from "../../types/mockTypes"
import data from "../../data/mock.json";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductsState {
    products: IProduct [],
    sorting: string | undefined,
    filter: number | undefined
}

const initialState: ProductsState = {
    products: data.products,
    sorting: undefined,
    filter: undefined
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setFilter(state, action: PayloadAction<string | number>){
            state.filter = Number(action.payload);
        }
    }
})

export default productsSlice.reducer;