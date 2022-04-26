import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalCabecalhoComponent } from './portal-cabecalho.component';

describe('PortalCabecalhoComponent', () => {
  let component: PortalCabecalhoComponent;
  let fixture: ComponentFixture<PortalCabecalhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalCabecalhoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalCabecalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
