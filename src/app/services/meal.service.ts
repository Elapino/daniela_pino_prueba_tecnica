import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MealService {
  private apiUrl: string = 'https://www.themealdb.com/api/json/v1/1';

  constructor(private http: HttpClient) {}

  getMeals(): Observable<any> {
    const url = `${this.apiUrl}/filter.php?c=beef`;
    return this.http.get(url);
  }

  getMealById(id: string): Observable<any> {
    const url = `${this.apiUrl}/lookup.php?i=${id}`;
    return this.http.get(url);
  }
}