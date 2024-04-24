import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Modal } from 'app/models/modal.model';
import { SharedModule } from 'app/shared/shared.module';

@Component({
  selector: 'app-product-dialog',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './product-dialog.component.html',
})
export class ProductDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Modal
  ) { }

  onAcceptClick(): void {
    this.dialogRef.close(true);
  }

  onCancelClick(): void {
    this.dialogRef.close(false);
  }
}