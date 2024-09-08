export interface IMock {
    filter: number | null,
    products: IProduct []
}

export interface IProduct {
    amount: number,
    name: string,
    logo: string
}