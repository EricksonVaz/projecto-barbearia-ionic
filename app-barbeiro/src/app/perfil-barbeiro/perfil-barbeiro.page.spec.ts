import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { PerfilBarbeiro } from './perfil-barbeiro.page';

describe('PerfilBarbeiroPage', () => {
  let component: PerfilBarbeiro;
  let fixture: ComponentFixture<PerfilBarbeiro>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilBarbeiro],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilBarbeiro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
