import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarGrupoComponent } from './cadastrar-grupo.component';

describe('CadastrarGrupoComponent', () => {
  let component: CadastrarGrupoComponent;
  let fixture: ComponentFixture<CadastrarGrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarGrupoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
