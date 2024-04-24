import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Modal } from 'app/models/modal.model';
import { SharedModule } from 'app/shared/shared.module';
import { GenericDialogComponent } from '../generic-dialog/generic-dialog.component';
import { Product } from 'app/models/product.model';
import { Router } from '@angular/router';
import { ConfirmOrderDialogComponent } from '../confirm-order-dialog/confirm-order-dialog.component';

@Component({
  selector: 'app-cart-dialog',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './cart-dialog.component.html',
})
export class CartDialogComponent {
  cartItems: Product[] = [
    { name: 'Fresa', description: 'Dulce y roja', price: 0.49, quantity: 30, imageUrl: 'https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/styles/article_1200_800_fallback/public/2022-04/fresas%C2%A9iStock.jpg?itok=iBcd_HLd' },
    { name: 'Pera', description: 'Dulce y crujiente', price: 0.49, quantity: 30, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPJjDyJIA4caAkAlGfLDIVF3oYwFu5og_QzgUvCKSr2g&s' },
    { name: 'Uva', description: 'Dulce y jugosa', price: 0.49, quantity: 30, imageUrl: 'https://d100mj7v0l85u5.cloudfront.net/s3fs-public/2023-02/uva-isabell-una-apuesta-de-innovacion-por-explorar.jpg' },
    { name: 'Kiwi', description: 'Ácido y nutritivo', price: 0.49, quantity: 30, imageUrl: 'https://media-cdn-v2.laodong.vn/storage/newsportal/2021/10/21/965844/Kiwi.jpg' },
  ];

  constructor(
    public dialogRef: MatDialogRef<CartDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    private _router: Router
  ) { }

  removeItemFromCart(item: Product): void {
    const confirmDeleteModal: Modal = {
      message: '¿Seguro que quiere eliminar el producto?',
      success: false,
      acceptOption: 'Aceptar',
      cancelOption: true
    };

    this.dialog.open(GenericDialogComponent, {
      width: '300px',
      data: confirmDeleteModal
    }).afterClosed().subscribe((confirmed) => {
      if (confirmed) {
        const index = this.cartItems.findIndex(p => p.name === item.name);
        if (index !== -1) {
          this.cartItems.splice(index, 1);

          const successModal: Modal = {
            message: 'Producto eliminado con éxito',
            success: true,
            acceptOption: 'Aceptar',
            cancelOption: false
          };
          this.dialog.open(GenericDialogComponent, {
            width: '300px',
            data: successModal
          });
        }
      }
    });
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  checkout(cartItems: Product[]): void {
    this.dialogRef.close();
    const modalData: Modal = {
      message: '¡El proceso de pago ha iniciado! En breve te redireccionaremos',
      success: true,
      acceptOption: 'Aceptar',
      cancelOption: false
    };
    const dialogRef = this.dialog.open(GenericDialogComponent, {
      width: '300px',
      data: modalData
    }).afterClosed().subscribe((confirmed) => {
      if (confirmed) {
        this.openConfirmationModal(cartItems);
      }
    });
  }

  openConfirmationModal(cartItems: Product[]): void {
    this.dialogRef.close();
    const dialogRef = this.dialog.open(ConfirmOrderDialogComponent, {
      width: '500px',
      data: cartItems
    }).afterClosed().subscribe((confirmed) => {
      if (confirmed) {
        const successModal: Modal = {
          message: 'Para acceder a esta función, es necesario registrar una cuenta en nuestra aplicación o iniciar sesión si ya eres usuario registrado',
          success: false,
          acceptOption: 'Aceptar',
          cancelOption: false
        };
        this.dialog.open(GenericDialogComponent, {
          width: '300px',
          data: successModal
        }).afterClosed().subscribe((confirmed) => {
          if (confirmed) {
            this._router.navigateByUrl('/sign-up');
          }
        });
      }
    });
  }

  onCancel(): void {
    this.dialog.closeAll();
  }
}