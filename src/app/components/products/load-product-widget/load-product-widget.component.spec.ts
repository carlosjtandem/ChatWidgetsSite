import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadProductWidgetComponent } from './load-product-widget.component';

describe('LoadProductWidgetComponent', () => {
  let component: LoadProductWidgetComponent;
  let fixture: ComponentFixture<LoadProductWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadProductWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadProductWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
