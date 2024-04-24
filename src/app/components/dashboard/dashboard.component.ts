import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { SharedTableComponent } from '../../shared/shared-layout/shared-table/shared-table.component';
import { Table } from '../../models/table.model';
import { ReplaySubject } from 'rxjs';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { User } from 'app/models/user.model';
import { MatDialog } from '@angular/material/dialog';
import { MealService } from 'app/services/meal.service';
import { ProductService } from 'app/services/product.service';
import { Product } from 'app/models/product.model';
import { SharedCardComponent } from 'app/shared/shared-layout/shared-card/shared-card.component';
import { Card } from 'app/models/card.model';
import { GenericDialogComponent } from '../dialog/generic-dialog/generic-dialog.component';
import { Modal, ProductModal } from 'app/models/modal.model';
import { ProductDialogComponent } from '../dialog/product-dialog/product-dialog.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    SharedModule,
    SharedTableComponent,
    SharedCardComponent,
  ],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  configCardProduct: Card = {
    class: 'min-w-64 min-h-120 max-h-20 pb-4 mx-3',
    onClick: false
  };

  configCardMeal: Card = {
    class: 'min-w-40 mx-3 min-h-44 max-h-44',
    textClass: 'font-bold text-base leading-4',
    onClick: false
  };

  configComponentTable: Table = {
    lazy: true,
    onChange: (...params) => this.getData(params),
    title: 'lbl.product.product',
    fields: [
      {
        title: 'lbl.product.name',
        field: 'name',
        size: 'min-w-56',
      },
      {
        title: 'lbl.product.description',
        field: 'description',
        size: 'min-w-60',
      },
      {
        title: 'lbl.product.price',
        field: 'price',
        size: 'min-w-40',
      },
      {
        title: 'lbl.product.quantity',
        field: 'quantity',
        size: 'min-w-40',
      },
    ],
    actions: [
      {
        icon: 'edit',
        color: 'bg-gradient-to-r from-blue-400/90 to-green-400/80',
        tooltip: 'lbl.tooltip.edit',
        onClick: (value) => this.editProduct(value),
      },
      {
        icon: 'delete',
        color: 'bg-gradient-to-r from-orange-400/90 to-red-400',
        tooltip: 'lbl.tooltip.delete',
        onClick: (value) => this.deleteProduct(value),
      },
    ],
    buttons: [
      {
        title: 'lbl.product.registerProduct',
        icon: 'add',
        onClick: (value) => this.registerProduct(),
        class: 'bg-gradient-to-r from-orange-400/90 to-red-400',
      },
    ],
    getData: () => this.dataObservable,
  };

  data = {
    content: [
      {
        name: 'Manzana',
        description: 'Manzana roja fresca y jugosa',
        price: 0.99,
        quantity: 50,
      },
      {
        name: 'Plátano',
        description: 'Plátano maduro y dulce',
        price: 0.49,
        quantity: 30,
      },
      {
        name: 'Zanahoria',
        description: 'Zanahoria fresca y crujiente',
        price: 1.25,
        quantity: 20,
      },
      {
        name: 'Tomate',
        description: 'Tomate rojo y jugoso',
        price: 0.75,
        quantity: 40,
      },
    ],
  };

  dataObservable: ReplaySubject<any> = new ReplaySubject<any>(1);
  totalItemsCity: number = 0;
  rangeDataCity: number = 15;
  update: boolean = false;
  products: Product[];
  meals: any[] = [];
  params: any;
  user: User;


  constructor(
    private _translocoService: TranslocoService,
    private _productService: ProductService,
    private _mealService: MealService,
    private _matDialog: MatDialog,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.getMeals();
    this.getProducts();
    this.user = {
      username: 'Daniela Pino',
      rol: "Administrador",
      email: "admin@gmail.com",
    };
    this.params = { pageNumber: 0 };
    this.getData();
  }

  /* Data */
  getMeals(): void {
    this._mealService.getMeals().subscribe((data) => {
      const filteredMeals = data.meals.filter(meal => meal.idMeal !== '52997');
      this.meals = filteredMeals.slice(0, 20).map(meal => ({
        name: meal.strMeal,
        description: null,
        price: null,
        quantity: null,
        imageUrl: meal.strMealThumb
      }));
    });
  }

  getProducts(): void {
    this._productService.getProducts().subscribe((data) => {
      this.products = data.slice(0, 26).map(product => ({
        name: product.title,
        description: product.description,
        price: null,
        quantity: null,
        imageUrl: product.images[0]
      }));
    });
  }

  getData(...params: any): void {
    this.dataObservable.next(this.data);

    if (params[0]) {
      this.params = { ...this.params, ...params[0]['0'] };
    }
  }


  /* Product options */
  editProduct(product: Product): void {
    const confirmDeleteModal: ProductModal = {
      message: 'Editar producto',
      acceptOption: 'Editar',
      content: product
    };

    this._matDialog
      .open(ProductDialogComponent, {
        width: '300px',
        data: confirmDeleteModal
      }).afterClosed().subscribe((confirmed) => {
        if (confirmed) {
          const successModal: Modal = {
            message: 'Acción realizada con éxito',
            success: true,
            acceptOption: 'Aceptar',
            cancelOption: false
          };
          this._matDialog.open(GenericDialogComponent, {
            width: '300px',
            data: successModal
          });
        }
      });
  }

  registerProduct(): void {
    const modalData: ProductModal = {
      message: 'Crear producto',
      acceptOption: 'Crear',
      content: null
    };

    this._matDialog
      .open(ProductDialogComponent, {
        width: '300px',
        data: modalData
      }).afterClosed().subscribe((confirmed) => {
        if (confirmed) {
          const successModal: Modal = {
            message: 'Acción realizada con éxito',
            success: true,
            acceptOption: 'Aceptar',
            cancelOption: false
          };
          this._matDialog.open(GenericDialogComponent, {
            width: '300px',
            data: successModal
          });
        }
      });
  }

  deleteProduct(product: Product): void {
    const confirmDeleteModal: Modal = {
      message: '¿Seguro que quiere eliminar el producto?',
      success: false,
      acceptOption: 'Aceptar',
      cancelOption: true
    };

    this._matDialog.open(GenericDialogComponent, {
      width: '300px',
      data: confirmDeleteModal
    }).afterClosed().subscribe((confirmed) => {
      if (confirmed) {
        const successModal: Modal = {
          message: 'Acción realizada con éxito',
          success: true,
          acceptOption: 'Aceptar',
          cancelOption: false
        };
        this._matDialog.open(GenericDialogComponent, {
          width: '300px',
          data: successModal
        });
      }
    });
  }

  signOut(): void {
    this._router.navigateByUrl('/sign-out');
  }
}