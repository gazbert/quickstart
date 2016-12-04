import { AppComponent } from './app.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import {DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';

////////  SPECS  /////////////
describe('AppComponent', function () {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA]
    TestBed.configureTestingModule({
      declarations: [ AppComponent ]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AppComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('h1'));
      });
  }));

  it('should create component', () => expect(comp).toBeDefined() );

  it('should have expected <h1> text', () => {
    fixture.detectChanges();
    const h1 = de.nativeElement;
    expect(h1.innerText).toMatch(/Tour/i,
      '<h1> should say something about "Tour"');
  });
});
