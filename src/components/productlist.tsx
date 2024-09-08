import { useAppSelector } from "../hooks/redux"
import { ProductCard } from "./productcard";
import { IProduct } from "../types/mockTypes";

export const ProductList = () => {

    const {products, filter} = useAppSelector(state => state.productReducer);
    let filteredProducts: IProduct[] = [];

    if (filter) {
        filteredProducts = products.filter((e) => {return  e.amount <= filter})
    } else {
        filteredProducts = products;
    }

    return (
        <div>
            {filteredProducts.map((product) => 
                <ProductCard 
                    amount = {product.amount} 
                    name = {product.name} 
                    logo = {product.logo}
                    key = {product.name}
                />
            )}
        </div>
    )
}