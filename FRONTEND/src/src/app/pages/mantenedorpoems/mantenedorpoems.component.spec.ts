import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenedorpoemsComponent } from './mantenedorpoems.component';

describe('MantenedorpoemsComponent', () => {
  let component: MantenedorpoemsComponent;
  let fixture: ComponentFixture<MantenedorpoemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantenedorpoemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantenedorpoemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
