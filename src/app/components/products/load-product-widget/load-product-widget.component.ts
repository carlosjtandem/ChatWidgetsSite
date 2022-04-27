import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
declare var CXBus: any;
@Component({
  selector: 'app-load-product-widget',
  templateUrl: './load-product-widget.component.html',
  styleUrls: ['./load-product-widget.component.css']
})
export class LoadProductWidgetComponent implements OnInit {
  bu: string;
  environmetUrl: string;
  product: string;

  constructor(private route: ActivatedRoute,
              private _renderer2: Renderer2,
              @Inject(DOCUMENT) private _document: Document,
             ) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        // console.log(params); 
        this.bu = params.bu;
        this.environmetUrl = params.environmetUrl;
        this.product = params.product.toLowerCase();
      }

    );

  //  inject a <script> inside a component
    var script = document.createElement('script');
    script.id = "widgets";
    script.src = this.environmetUrl+"/lib/cxbus.min.js";
    script.setAttribute("endpoint", this.bu);
    script.setAttribute("product", this.product);
    script.setAttribute("environmetUrl", this.environmetUrl);
    script.addEventListener('load', function () {
      CXBus.configure({debug: false, pluginsPath: script.getAttribute("environmetUrl")+'/lib/plugins/'});
      CXBus.loadFile( script.getAttribute("environmetUrl")+'/'+script.getAttribute("product")+'.widgets.min.js').done(function(){
          CXBus.loadPlugin('widgets-core')});
   });


  this._renderer2.appendChild(this._document.body, script);
  
  }


  
}
