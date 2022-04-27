import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSnippetCodeComponent } from './create-snippet-code.component';

describe('CreateSnippetCodeComponent', () => {
  let component: CreateSnippetCodeComponent;
  let fixture: ComponentFixture<CreateSnippetCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSnippetCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSnippetCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
