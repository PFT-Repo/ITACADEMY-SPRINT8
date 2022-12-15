import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PelisListaComponent } from './pelis-lista.component';

describe('PelisListaComponent', () => {
  let component: PelisListaComponent;
  let fixture: ComponentFixture<PelisListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PelisListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PelisListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
