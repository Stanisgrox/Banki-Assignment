import { IProduct } from "../types/mockTypes"

/*
    Карточка продукта, в ней отсутсвует логика, только верстка по макету и вставление пропсов.

    Для CEO Оптимизации я сразу вставил название банка в IMG логотипа
*/

export const ProductCard = (props: IProduct) => {
    return (
        <div className="bg-white rounded-xl shadow-md p-4 mb-3 product-card">
            <div className="flex justify-start">
                <div className="mr-3">
                    <img 
                        src = {props.logo} 
                        className = "w-24" 
                        alt = {`Логотип ${props.name}`} 
                    />
                </div>
                <div className="font-bold text-xl pt-1">
                    {props.name}
                </div>
            </div>
            <div className="flex justify-between mt-4">
                <div className="text-gray-500">
                    Сумма
                </div>
                <div className="font-semibold text-lg">
                    {props.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽
                </div>
            </div>
        </div>
    )
}