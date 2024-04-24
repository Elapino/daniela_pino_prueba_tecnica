import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Modal } from 'app/models/modal.model';
import { SharedModule } from 'app/shared/shared.module';
import { GenericDialogComponent } from '../generic-dialog/generic-dialog.component';
import { Product } from 'app/models/product.model';

@Component({
  selector: 'app-cart-dialog',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './cart-dialog.component.html',
})
export class CartDialogComponent {
  cartItems: Product[] = [
    { name: 'Fresa', description: 'Dulce y roja', price: 0.49, quantity: 30, imageUrl: 'https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/styles/article_1200_800_fallback/public/2022-04/fresas%C2%A9iStock.jpg?itok=iBcd_HLd' },
    { name: 'Sandía', description: 'Refrescante y dulce', price: 0.49, quantity: 30, imageUrl: 'https://s1.elespanol.com/2021/08/18/ciencia/nutricion/605201362_200816272_1706x960.jpg' },
    { name: 'Pera', description: 'Dulce y crujiente', price: 0.49, quantity: 30, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPJjDyJIA4caAkAlGfLDIVF3oYwFu5og_QzgUvCKSr2g&s' },
    { name: 'Banana', description: 'Madura y dulce', price: 0.49, quantity: 30, imageUrl: 'https://www.elespectador.com/resizer/dIZclKyQPmweoDGzwKZr_TU4TQw=/1200x675/filters:quality(60):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/PI7CB4NGAVCRNJTJP6U4A4MC4I.jpg' },
    { name: 'Uva', description: 'Dulce y jugosa', price: 0.49, quantity: 30, imageUrl: 'https://d100mj7v0l85u5.cloudfront.net/s3fs-public/2023-02/uva-isabell-una-apuesta-de-innovacion-por-explorar.jpg' },
    { name: 'Fresa', description: 'Dulce y roja', price: 0.49, quantity: 30, imageUrl: 'https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/styles/article_1200_800_fallback/public/2022-04/fresas%C2%A9iStock.jpg?itok=iBcd_HLd' },
    { name: 'Pera', description: 'Dulce y crujiente', price: 0.49, quantity: 30, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPJjDyJIA4caAkAlGfLDIVF3oYwFu5og_QzgUvCKSr2g&s' },
  ];

  constructor(
    public dialogRef: MatDialogRef<CartDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog
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
        const successModal: Modal = {
          message: 'Acción realizada con éxito',
          success: true,
          acceptOption: 'Aceptar',
          cancelOption: false
        };
        this.dialog.open(GenericDialogComponent, {
          width: '300px',
          data: successModal
        });
      }
    });
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  checkout(): void {
    this.dialogRef.close();
    const modalData: Modal = {
      message: '¡Proceso de pago iniciado!',
      success: true,
      acceptOption: 'Aceptar',
      cancelOption: false
    };
    this.dialog.open(GenericDialogComponent, {
      width: '300px',
      data: modalData
    });
  }

  onCancel(): void {
    this.dialog.closeAll();
  }
}