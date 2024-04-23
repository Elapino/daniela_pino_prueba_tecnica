import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TranslocoService } from '@ngneat/transloco';
import { Product } from 'app/models/product.model';
import { ProductService } from 'app/services/product.service';
import { SharedModule } from 'app/shared/shared.module';

@Component({
  selector: 'app-product-dialog',
  standalone: true,
  providers: [SharedModule],
  templateUrl: './product-dialog.component.html',
})
export class ProductDialogComponent implements OnInit {
  appData = null;
  productData = null;
  formGroup: FormGroup;
  title: string;
  buttonLabel: string;


  constructor(
    private formBuilder: FormBuilder,
    private _translocoService: TranslocoService,
    private _productService: ProductService,
    private matDialogRef: MatDialogRef<ProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    if (data) {
      this.appData = data;
      this.title = data.title;
      this.buttonLabel = data.buttonLabel;
      this.productData = data.product || null;
    }
  }


  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: [
        '',
        [
          Validators.compose([
            Validators.required,
            Validators.maxLength(30),
            Validators.minLength(2),
          ]),
        ],
      ],
      description: [
        '',
        [
          Validators.compose([
            Validators.required,
            Validators.maxLength(60),
            Validators.minLength(4),
          ]),
        ],
      ],
      price: [
        '',
        [
          Validators.compose([
            Validators.required,
            Validators.maxLength(10),
            Validators.minLength(1),
          ]),
        ],
      ],
      quantity: [
        '',
        [
          Validators.compose([
            Validators.required,
            Validators.email,
            Validators.maxLength(10),
            Validators.minLength(1),
          ]),
        ],
      ]
    });

    this.fillModal();
  }


  /* Filling */
  fillModal(): void {
    if (this.productData) {
      this.formGroup.controls.name.setValue(this.productData.name);
      this.formGroup.controls.description.setValue(this.productData.description);
      this.formGroup.controls.price.setValue(this.productData.price);
      this.formGroup.controls.quantity.setValue(this.productData.quantity);
    } else {
      this.formGroup.reset();
    }
  }


  /* User options */
  selectAction(label: string): void {
    if (label === this._translocoService.translate('lbl.button.save')) {
      this.addProduct();
    }

    if (label === this._translocoService.translate('lbl.button.edit')) {
      this.editProduct();
    }
  }

  editProduct(): void {
    if (this.formGroup.valid) {
      const productDto: Product = {
        id: this.productData.id,
        name: this.formGroup.controls.name.value.trim(),
        description: this.formGroup.controls.description.value.trim(),
        price: this.formGroup.controls.price.value,
        quantity: this.formGroup.controls.quantity.value.trim(),
      };
      this._productService.saveProduct(productDto);
    }
  }

  addProduct(): void {
    if (this.formGroup.valid) {
      const productDto: Product = {
        name: this.formGroup.controls.name.value.trim(),
        description: this.formGroup.controls.description.value.trim(),
        price: this.formGroup.controls.price.value,
        quantity: this.formGroup.controls.quantity.value.trim(),
      };
      this._productService.saveProduct(productDto);
    }
  }
}