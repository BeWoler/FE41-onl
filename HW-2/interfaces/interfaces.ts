

export interface IUser {
    name: string,
    years: number,
}

export interface IObjectArray {
    id: number,
    name: string,
    years: number,
}

export interface IProductsArr {
    id: number,
    name: string,
    price: number,
    currency: string,
    ingredients: string[],
    type: string,
    available: boolean,
}