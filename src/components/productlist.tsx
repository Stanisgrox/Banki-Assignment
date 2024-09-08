import { useAppSelector } from "../hooks/redux"
import { ProductCard } from "./productcard";
import { IProduct } from "../types/mockTypes";

/*
    Рендер списка продуктов. 

    Так как весь ответ - один JSON файл, который был загружен в products редусера, его сначала нужно отфильтровать и отсортировать.

    Если есть фильтр (состояние, заданное ссылкой или инпутом searchbox), то выполняется фильтрация и все значения, которые строго больше фильтра не включаются в новый массив.

    Затем создается копия отфильтрованного массива с применением сортировки, если она необходима.

    Было тяжело не потеряться в тернарных операторах, но логика простая: сначала проверяется, есть ли сортировка - если нет, то sortedProducts просто получает ссылку на filteredProducts.
    Если сортировка была, то сортируется сам массив. При этом если это DESC, то ничего не меняется, в ином случае возвращаемые числа меняются местами, чтобы перевернуть функцию.
*/

export const ProductList = () => {

    const {products, filter, sorting} = useAppSelector(state => state.productReducer);
    let filteredProducts: IProduct[] = [];

    if (filter) {
        filteredProducts = products.filter((e) => {return  e.amount <= filter})
    } else {
        filteredProducts = products;
    }

    let sortedProducts = sorting? [...filteredProducts].sort((a, b) => a.amount < b.amount ? sorting === 'desc'? 1 : -1 : sorting === 'desc'? -1 : 1) : filteredProducts;

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