import { Component, OnInit } from '@angular/core';
import environmentsData from '../../../../assets/environments.json';
import { IEnvironment } from '../../environments/environment';
import productsData from '../../../../assets/products.json';
import { IProduct } from '../product';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-snippet-code',
  templateUrl: './create-snippet-code.component.html',
  styleUrls: ['./create-snippet-code.component.css'],
})
export class CreateSnippetCodeComponent implements OnInit {
  environments: IEnvironment[] = environmentsData;
  products: IProduct[] = productsData;
  productForm: FormGroup;
  submitted = false;
code='';
public isCollapsed = true;
  
  constructor(private fb: FormBuilder,private route: Router) {
    this.productForm= this.fb.group({
      environment: ['', Validators.required],
      product: ['', Validators.required],
      bussinesUnit: new FormControl({value: null, disabled: true}, Validators.required),
      extraData: [''],
    })
  }

  ngOnInit():void {
  }

  onSubmit() {
    this.submitted=true;
    if(this.productForm.invalid){
      return;
    }
    console.log('dsue');
    console.log(this.productForm);
    // this.route.navigate(['/load-product-widget'],{ queryParams: { order: 'popular' } });
    window.open('/load-product-widget?environmetUrl='+this.productForm.value.environment+'&bu='+this.productForm.value.product.bu+'&product='+this.productForm.value.product.name, "_blank");
  }


  showSnippetCode() {
    this.isCollapsed = false;
    // collapse.toggle()
    console.log('onSubmi2t');
    console.log(this.productForm);
    this.code = `
    <script  id="widgets" src='`+this.productForm.value.environment+`/lib/cxbus.min.js' onload="javascript:
        CXBus.configure({pluginsPath:'`+this.productForm.value.environment+`/lib/plugins/'}); 
        CXBus.loadFile('`+this.productForm.value.environment+`/`+this.productForm.value.product.name.toLowerCase()+`.widgets.min.js').done(function(){
        CXBus.loadPlugin('widgets-core')});"
        endpoint="`+this.productForm.value.product.bu+`" product="`+this.productForm.value.product.name+`">
    </script>`
  }
}
