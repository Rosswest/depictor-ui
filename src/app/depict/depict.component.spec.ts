import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepictComponent } from './depict.component';

describe('DepictComponent', () => {
  let component: DepictComponent;
  let fixture: ComponentFixture<DepictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
