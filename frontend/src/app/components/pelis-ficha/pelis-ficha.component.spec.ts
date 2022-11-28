import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PelisFichaComponent } from './pelis-ficha.component';

describe('PelisFichaComponent', () => {
  let component: PelisFichaComponent;
  let fixture: ComponentFixture<PelisFichaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PelisFichaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PelisFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
