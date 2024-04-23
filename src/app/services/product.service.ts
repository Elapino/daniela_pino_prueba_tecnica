import { Injectable } from '@angular/core';
import { Product } from 'app/models/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productKey = 'products';
  private apiUrl: string = 'https://api.escuelajs.co/api/v1/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  saveProduct(product: Product): void {
    let products: Product[] = this.getProductsFromStorage();
    if (!products) {
      products = [];
    }

    const existingProductIndex = products.findIndex((p) => p.id === product.id);

    if (existingProductIndex !== -1) {
      products[existingProductIndex] = product;
    } else {
      products.push(product);
    }
    localStorage.setItem(this.productKey, JSON.stringify(products));
  }

  getProductsFromStorage(): Product[] | null {
    const productsString = localStorage.getItem(this.productKey);
    return productsString ? JSON.parse(productsString) : null;
  }

  deleteProduct(productId: string): void {
    let products: Product[] = this.getProductsFromStorage();
    if (products) {
      products = products.filter((p) => p.id !== productId);
      localStorage.setItem(this.productKey, JSON.stringify(products));
    }
  }
}
