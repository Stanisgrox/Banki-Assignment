import { useAppSelector } from "../hooks/redux"
import { ProductCard } from "./productcard";
import { IProduct } from "../types/mockTypes";

export const ProductList = () => {

    const {products, filter, sorting} = useAppSelector(state => state.productReducer);
    let filteredProducts: IProduct[] = [];

    if (filter) {
        filteredProducts = products.filter((e) => {return  e.amount <= filter})
    } else {
        filteredProducts = products;
    }

    let sortedProducts = [...filteredProducts].sort((a, b) => a.amount < b.amount ? sorting === 'desc'? 1 : -1 : sorting === 'desc'? -1 : 1);

    return (
        <div>
            {sortedProducts.map((product) => 
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