import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotosFichaComponent } from './pilotos-ficha.component';

describe('PilotosFichaComponent', () => {
  let component: PilotosFichaComponent;
  let fixture: ComponentFixture<PilotosFichaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PilotosFichaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PilotosFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
