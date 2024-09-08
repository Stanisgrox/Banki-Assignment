import { useAppSelector } from "../hooks/redux"
import { ProductCard } from "./productcard";

export const ProductList = () => {

    const {products} = useAppSelector(state => state.productReducer);

    return (
        <div>
            {products.map((product) => 
                <ProductCard 
                    amount = {product.amount} 
                    name = {product.name} 
                    logo = {product.logo}
                    key={product.name}
                />
            )}
        </div>
    )
}