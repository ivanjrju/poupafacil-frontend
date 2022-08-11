import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespesaGrupoComponent } from './despesa-grupo.component';

describe('DespesaGrupoComponent', () => {
  let component: DespesaGrupoComponent;
  let fixture: ComponentFixture<DespesaGrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DespesaGrupoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DespesaGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
