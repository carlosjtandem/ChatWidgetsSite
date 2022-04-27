import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProductsComponent } from './components/products/list-products/list-products.component';
import { CreateProductComponent } from './components/products/create-product/create-product.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CreateSnippetCodeComponent } from './components/products/create-snippet-code/create-snippet-code.component';
import { ListEnvironmentsComponent } from './components/environments/list-environments/list-environments.component';
import { ReactiveFormsModule} from '@angular/forms';
import { HighlightModule,HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadProductWidgetComponent } from './components/products/load-product-widget/load-product-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProductsComponent,
    CreateProductComponent,
    NavbarComponent,
    CreateSnippetCodeComponent,
    ListEnvironmentsComponent,
    LoadProductWidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HighlightModule,
    NgbModule
  ],
  providers: [    {
    provide: HIGHLIGHT_OPTIONS,
    useValue: {
      fullLibraryLoader: () => import('highlight.js'),
    }
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
