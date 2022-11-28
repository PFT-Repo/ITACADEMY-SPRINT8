import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipsFichaComponent } from './starships-ficha.component';

describe('StarshipsFichaComponent', () => {
  let component: StarshipsFichaComponent;
  let fixture: ComponentFixture<StarshipsFichaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarshipsFichaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarshipsFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
