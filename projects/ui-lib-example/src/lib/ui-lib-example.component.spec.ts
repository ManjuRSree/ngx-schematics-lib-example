import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiLibExampleComponent } from './ui-lib-example.component';

describe('UiLibExampleComponent', () => {
  let component: UiLibExampleComponent;
  let fixture: ComponentFixture<UiLibExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiLibExampleComponent]
    });
    fixture = TestBed.createComponent(UiLibExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
