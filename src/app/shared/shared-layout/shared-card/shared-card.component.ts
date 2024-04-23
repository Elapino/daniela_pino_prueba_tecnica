import { Component, Input } from '@angular/core';
import { Product } from 'app/models/product.model';
import { SharedModule } from '../../shared.module';
import { Card } from 'app/models/card.model';
import { AddToCartDialogComponent } from 'app/components/dialog/add-to-cart-dialog/add-to-cart-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-shared-card',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './shared-card.component.html',
})
export class SharedCardComponent {
  @Input() product: Product;
  @Input() card: Card;

  constructor(
    public dialog: MatDialog
  ) { }

  openAddToCartModal(): void {
    this.dialog.open(AddToCartDialogComponent);
  }
}