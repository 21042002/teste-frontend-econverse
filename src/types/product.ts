export interface Product {
    productName: string;
    descritionShort: string;
    photo: string;
    price: number;
}


export interface ProductResponse {
    sucess: boolean;
    products: Product[]
}

