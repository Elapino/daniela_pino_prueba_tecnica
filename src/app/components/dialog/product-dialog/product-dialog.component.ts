import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductModal } from 'app/models/modal.model';
import { SharedModule } from 'app/shared/shared.module';

@Component({
  selector: 'app-product-dialog',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './product-dialog.component.html',
})
export class ProductDialogComponent implements OnInit{
  productForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ProductDialogComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: ProductModal
  ) { }
 
  ngOnInit(): void {    
    this.productForm = this.formBuilder.group({
      name: ['',
      [
        Validators.compose([
          Validators.required,
          Validators.maxLength(60),
          Validators.minLength(2)
        ])
      ]],
      description: ['',
      [
        Validators.compose([
          Validators.required,
          Validators.maxLength(60),
          Validators.minLength(2)
        ])
      ]],
      price:  ['',
      [
        Validators.compose([
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(1)
        ])
      ]],
      quantity:  ['',
      [
        Validators.compose([
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(1)
        ])
      ]]
    });

    if(this.data.content){
      const data = this.data.content;
      this.productForm.controls.name.setValue(data.name);
			this.productForm.controls.description.setValue(data.description);
			this.productForm.controls.price.setValue(data.price);
			this.productForm.controls.quantity.setValue(data.quantity);
    }
  }

  onKeyPress(event: KeyboardEvent): void {
    const allowedCharacters = /\d/;
    if (!allowedCharacters.test(event.key)) {
      event.preventDefault();
    }
  }
  onInput(event: InputEvent): void {
    const inputElement = event.target as HTMLInputElement;
    const inputValue = inputElement.value;
    const sanitizedValue = inputValue.replace(/\D/g, '');
    inputElement.value = sanitizedValue;
  }

  onAcceptClick(): void {
    this.dialogRef.close(true);
  }

  onCancelClick(): void {
    this.dialogRef.close(false);
  }
}