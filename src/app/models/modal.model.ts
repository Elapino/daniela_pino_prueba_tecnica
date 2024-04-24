import { Product } from "./product.model";

export interface Modal {
    message: string;
    success: boolean;
    acceptOption: string;
    cancelOption: boolean;
}  

export interface ProductModal {
    message: string;
    acceptOption: string;
    content: Product;
}  