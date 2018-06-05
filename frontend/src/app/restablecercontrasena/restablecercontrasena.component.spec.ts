import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestablecercontrasenaComponent } from './restablecercontrasena.component';

describe('RestablecercontrasenaComponent', () => {
  let component: RestablecercontrasenaComponent;
  let fixture: ComponentFixture<RestablecercontrasenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestablecercontrasenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestablecercontrasenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
