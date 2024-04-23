import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { Router } from '@angular/router';
import { SharedCardComponent } from 'app/shared/shared-layout/shared-card/shared-card.component';
import { Product } from 'app/models/product.model';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { CartDialogComponent } from '../dialog/cart-dialog/cart-dialog.component';
;
@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [SharedModule, SharedCardComponent, MatMenuModule],
  templateUrl: './catalog.component.html',
})
export class CatalogComponent implements OnInit {
  fruits: Product[];

  constructor(
    public dialog: MatDialog,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.fruits = [
      { name: 'Manzana', description: 'Fresca y jugosa', price: 0.99, quantity: 50, imageUrl: 'https://www.recetasnestlecam.com/sites/default/files/styles/crop_article_banner_desktop_nes/public/2022-04/manzana-verde-y-roja.jpg?itok=ufd1YnML' },
      { name: 'Banana', description: 'Madura y dulce', price: 0.49, quantity: 30, imageUrl: 'https://www.elespectador.com/resizer/dIZclKyQPmweoDGzwKZr_TU4TQw=/1200x675/filters:quality(60):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/PI7CB4NGAVCRNJTJP6U4A4MC4I.jpg' },
      { name: 'Uva', description: 'Dulce y jugosa', price: 0.49, quantity: 30, imageUrl: 'https://d100mj7v0l85u5.cloudfront.net/s3fs-public/2023-02/uva-isabell-una-apuesta-de-innovacion-por-explorar.jpg' },
      { name: 'Fresa', description: 'Dulce y roja', price: 0.49, quantity: 30, imageUrl: 'https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/styles/article_1200_800_fallback/public/2022-04/fresas%C2%A9iStock.jpg?itok=iBcd_HLd' },
      { name: 'Pera', description: 'Dulce y crujiente', price: 0.49, quantity: 30, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPJjDyJIA4caAkAlGfLDIVF3oYwFu5og_QzgUvCKSr2g&s' },
      { name: 'Tomate', description: 'Rojo y jugoso', price: 0.49, quantity: 30, imageUrl: 'https://thefoodtech.com/wp-content/uploads/2020/06/Componentes-de-calidad-en-el-tomate-828x548.jpg' },
      { name: 'Sandía', description: 'Refrescante y dulce', price: 0.49, quantity: 30, imageUrl: 'https://s1.elespanol.com/2021/08/18/ciencia/nutricion/605201362_200816272_1706x960.jpg' },
      { name: 'Zanahoria', description: 'Fresca y crujiente', price: 0.49, quantity: 30, imageUrl: 'https://www.cuerpomente.com/medio/2020/10/21/zanahoria_b6b4af96_1200x630.jpg' },
      { name: 'Melón', description: 'Dulce y jugoso', price: 0.49, quantity: 30, imageUrl: 'https://bloglatam.jacto.com/wp-content/uploads/2022/04/cultivo-de-melon.jpg' },
      { name: 'Limón', description: 'Ácido y refrescante', price: 0.49, quantity: 30, imageUrl: 'https://mejorconsalud.as.com/wp-content/uploads/2015/05/beneficios-limon-salud-1200x800.jpg' },
      { name: 'Mango', description: 'Exótico y tropical', price: 0.49, quantity: 30, imageUrl: 'https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/styles/article_1200_800_fallback/public/2021-10/mango%C2%A9iStock.jpg?itok=b0BXEvPw' },
      { name: 'Kiwi', description: 'Ácido y nutritivo', price: 0.49, quantity: 30, imageUrl: 'https://media-cdn-v2.laodong.vn/storage/newsportal/2021/10/21/965844/Kiwi.jpg' },
      { name: 'Piña', description: 'Tropical y dulce', price: 0.49, quantity: 30, imageUrl: 'https://cloudfront-us-east-1.images.arcpublishing.com/lanacionpy/JZG272YIHZCT5DMPBRNGJXTZDA.jpg' },
      { name: 'Papaya', description: 'Tropical y dulce', price: 0.49, quantity: 30, imageUrl: 'https://www.clarin.com/2023/09/20/8cPJs1WdF_2000x1500__1.jpg' },
      { name: 'Naranja', description: 'Jugosa y ácida', price: 0.49, quantity: 30, imageUrl: 'https://elpoderdelconsumidor.org/wp-content/uploads/2022/02/naranja-1.jpg' },
      { name: 'Cereza', description: 'Dulce y vibrante', price: 0.49, quantity: 30, imageUrl: 'https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/2022-04/cerezas%C2%A9iStock.jpg' },
      { name: 'Espinaca', description: 'Saludable y verde', price: 0.49, quantity: 30, imageUrl: 'https://www.conasi.eu/blog/wp-content/uploads/2023/07/recetas-con-espinacas-d.jpg' },
      { name: 'Manzana', description: 'Fresca y jugosa', price: 0.99, quantity: 50, imageUrl: 'https://www.recetasnestlecam.com/sites/default/files/styles/crop_article_banner_desktop_nes/public/2022-04/manzana-verde-y-roja.jpg?itok=ufd1YnML' },
      { name: 'Banana', description: 'Madura y dulce', price: 0.49, quantity: 30, imageUrl: 'https://www.elespectador.com/resizer/dIZclKyQPmweoDGzwKZr_TU4TQw=/1200x675/filters:quality(60):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/PI7CB4NGAVCRNJTJP6U4A4MC4I.jpg' },
      { name: 'Uva', description: 'Dulce y jugosa', price: 0.49, quantity: 30, imageUrl: 'https://d100mj7v0l85u5.cloudfront.net/s3fs-public/2023-02/uva-isabell-una-apuesta-de-innovacion-por-explorar.jpg' },
      { name: 'Fresa', description: 'Dulce y roja', price: 0.49, quantity: 30, imageUrl: 'https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/styles/article_1200_800_fallback/public/2022-04/fresas%C2%A9iStock.jpg?itok=iBcd_HLd' },
      { name: 'Pera', description: 'Dulce y crujiente', price: 0.49, quantity: 30, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPJjDyJIA4caAkAlGfLDIVF3oYwFu5og_QzgUvCKSr2g&s' },
      { name: 'Tomate', description: 'Rojo y jugoso', price: 0.49, quantity: 30, imageUrl: 'https://thefoodtech.com/wp-content/uploads/2020/06/Componentes-de-calidad-en-el-tomate-828x548.jpg' },
      { name: 'Sandía', description: 'Refrescante y dulce', price: 0.49, quantity: 30, imageUrl: 'https://s1.elespanol.com/2021/08/18/ciencia/nutricion/605201362_200816272_1706x960.jpg' },
      { name: 'Zanahoria', description: 'Fresca y crujiente', price: 0.49, quantity: 30, imageUrl: 'https://www.cuerpomente.com/medio/2020/10/21/zanahoria_b6b4af96_1200x630.jpg' },
      { name: 'Melón', description: 'Dulce y jugoso', price: 0.49, quantity: 30, imageUrl: 'https://bloglatam.jacto.com/wp-content/uploads/2022/04/cultivo-de-melon.jpg' },
      { name: 'Limón', description: 'Ácido y refrescante', price: 0.49, quantity: 30, imageUrl: 'https://mejorconsalud.as.com/wp-content/uploads/2015/05/beneficios-limon-salud-1200x800.jpg' },
      { name: 'Mango', description: 'Exótico y tropical', price: 0.49, quantity: 30, imageUrl: 'https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/styles/article_1200_800_fallback/public/2021-10/mango%C2%A9iStock.jpg?itok=b0BXEvPw' },
      { name: 'Kiwi', description: 'Ácido y nutritivo', price: 0.49, quantity: 30, imageUrl: 'https://media-cdn-v2.laodong.vn/storage/newsportal/2021/10/21/965844/Kiwi.jpg' },
      { name: 'Piña', description: 'Tropical y dulce', price: 0.49, quantity: 30, imageUrl: 'https://cloudfront-us-east-1.images.arcpublishing.com/lanacionpy/JZG272YIHZCT5DMPBRNGJXTZDA.jpg' },
      { name: 'Papaya', description: 'Tropical y dulce', price: 0.49, quantity: 30, imageUrl: 'https://www.clarin.com/2023/09/20/8cPJs1WdF_2000x1500__1.jpg' },
      { name: 'Naranja', description: 'Jugosa y ácida', price: 0.49, quantity: 30, imageUrl: 'https://elpoderdelconsumidor.org/wp-content/uploads/2022/02/naranja-1.jpg' },
      { name: 'Cereza', description: 'Dulce y vibrante', price: 0.49, quantity: 30, imageUrl: 'https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/2022-04/cerezas%C2%A9iStock.jpg' },
      { name: 'Espinaca', description: 'Saludable y verde', price: 0.49, quantity: 30, imageUrl: 'https://www.conasi.eu/blog/wp-content/uploads/2023/07/recetas-con-espinacas-d.jpg' },
      { name: 'Manzana', description: 'Fresca y jugosa', price: 0.99, quantity: 50, imageUrl: 'https://www.recetasnestlecam.com/sites/default/files/styles/crop_article_banner_desktop_nes/public/2022-04/manzana-verde-y-roja.jpg?itok=ufd1YnML' },
      { name: 'Banana', description: 'Madura y dulce', price: 0.49, quantity: 30, imageUrl: 'https://www.elespectador.com/resizer/dIZclKyQPmweoDGzwKZr_TU4TQw=/1200x675/filters:quality(60):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/PI7CB4NGAVCRNJTJP6U4A4MC4I.jpg' },
      { name: 'Uva', description: 'Dulce y jugosa', price: 0.49, quantity: 30, imageUrl: 'https://d100mj7v0l85u5.cloudfront.net/s3fs-public/2023-02/uva-isabell-una-apuesta-de-innovacion-por-explorar.jpg' },
      { name: 'Fresa', description: 'Dulce y roja', price: 0.49, quantity: 30, imageUrl: 'https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/styles/article_1200_800_fallback/public/2022-04/fresas%C2%A9iStock.jpg?itok=iBcd_HLd' },
      { name: 'Sandía', description: 'Refrescante y dulce', price: 0.49, quantity: 30, imageUrl: 'https://s1.elespanol.com/2021/08/18/ciencia/nutricion/605201362_200816272_1706x960.jpg' },
      { name: 'Zanahoria', description: 'Fresca y crujiente', price: 0.49, quantity: 30, imageUrl: 'https://www.cuerpomente.com/medio/2020/10/21/zanahoria_b6b4af96_1200x630.jpg' },
      { name: 'Pera', description: 'Dulce y crujiente', price: 0.49, quantity: 30, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPJjDyJIA4caAkAlGfLDIVF3oYwFu5og_QzgUvCKSr2g&s' },
      { name: 'Tomate', description: 'Rojo y jugoso', price: 0.49, quantity: 30, imageUrl: 'https://thefoodtech.com/wp-content/uploads/2020/06/Componentes-de-calidad-en-el-tomate-828x548.jpg' }
    ];
  }

  signIn(): void {
    this._router.navigateByUrl('/sign-in');
  }

  signUp() {
    this._router.navigateByUrl('/sign-up');
  }

  shoppingCart() {
    this.dialog.open(CartDialogComponent);
  }
}