import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPokemonsComponent } from './view-pokemons.component';

describe('ViewPokemonsComponent', () => {
  let component: ViewPokemonsComponent;
  let fixture: ComponentFixture<ViewPokemonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPokemonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
