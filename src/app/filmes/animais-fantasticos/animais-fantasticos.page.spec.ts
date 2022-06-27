import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnimaisFantasticosPage } from './animais-fantasticos.page';

describe('AnimaisFantasticosPage', () => {
  let component: AnimaisFantasticosPage;
  let fixture: ComponentFixture<AnimaisFantasticosPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimaisFantasticosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnimaisFantasticosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
