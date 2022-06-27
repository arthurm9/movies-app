import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AssasinoSemRastroPage } from './assasino-sem-rastro.page';

describe('AssasinoSemRastroPage', () => {
  let component: AssasinoSemRastroPage;
  let fixture: ComponentFixture<AssasinoSemRastroPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AssasinoSemRastroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AssasinoSemRastroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
