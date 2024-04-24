import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Product } from 'app/models/product.model';
import { SharedModule } from 'app/shared/shared.module';
import { CartDialogComponent } from '../cart-dialog/cart-dialog.component';

@Component({
  selector: 'app-confirm-order-dialog',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './confirm-order-dialog.component.html',
})
export class ConfirmOrderDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ConfirmOrderDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product[],
    public dialog: MatDialog
  ) { }

  onCancelClick(): void {
    this.dialogRef.close(false);
    this.dialog.open(CartDialogComponent);
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }

}