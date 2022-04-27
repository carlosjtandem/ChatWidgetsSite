import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEnvironmentsComponent } from './components/environments/list-environments/list-environments.component';
import { CreateProductComponent } from './components/products/create-product/create-product.component';
import { CreateSnippetCodeComponent } from './components/products/create-snippet-code/create-snippet-code.component';
import { ListProductsComponent } from './components/products/list-products/list-products.component';
import { LoadProductWidgetComponent } from './components/products/load-product-widget/load-product-widget.component';

const routes: Routes = [
  { path: '', redirectTo: 'list-products', pathMatch: 'full' },
  { path: 'list-products', component: ListProductsComponent },
  { path: 'create-product', component: CreateProductComponent },
  { path: 'create-snippet-code', component: CreateSnippetCodeComponent },
  { path: 'list-environments', component: ListEnvironmentsComponent },
  { path: 'load-product-widget', component: LoadProductWidgetComponent },
 
  { path: '**', redirectTo: 'list-products', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
