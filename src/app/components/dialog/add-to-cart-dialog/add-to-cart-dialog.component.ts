import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Modal } from 'app/models/modal.model';
import { SharedModule } from 'app/shared/shared.module';
import { GenericDialogComponent } from '../generic-dialog/generic-dialog.component';
import { CartDialogComponent } from '../cart-dialog/cart-dialog.component';


@Component({
  selector: 'app-add-to-cart-dialog',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './add-to-cart-dialog.component.html',
})
export class AddToCartDialogComponent {
  quantity: number = 1;

  constructor(
    private dialogRef: MatDialogRef<AddToCartDialogComponent>, 
    public dialog: MatDialog
  ) { }

  onAddToCart(): void {
    this.dialogRef.close();
    const modalData: Modal = {
      message: '¡Se ha añadido con exito!',
      success: true,
      acceptOption: 'Aceptar',
      cancelOption: false
    };

    this.dialog.open(GenericDialogComponent, {
      width: '300px',
      data: modalData
    }).afterClosed().subscribe((confirmed) => {
      if (confirmed) {
        this.dialog.open(CartDialogComponent);
      }
    });
  }

  onCancel(): void {
    this.dialog.closeAll();
  }

  incrementQuantity(): void {
    this.quantity++;
  }

  decrementQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}