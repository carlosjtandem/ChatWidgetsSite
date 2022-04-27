import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEnvironmentsComponent } from './list-environments.component';

describe('ListEnvironmentsComponent', () => {
  let component: ListEnvironmentsComponent;
  let fixture: ComponentFixture<ListEnvironmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEnvironmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEnvironmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
