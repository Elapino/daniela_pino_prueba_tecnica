import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Modal } from 'app/models/modal.model';
import { SharedModule } from 'app/shared/shared.module';

@Component({
  selector: 'app-generic-dialog',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './generic-dialog.component.html',
})
export class GenericDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<GenericDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Modal
  ) { }

  onAcceptClick(): void {
    this.dialogRef.close(true);
  }
}