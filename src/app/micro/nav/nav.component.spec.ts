import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMicroComponent } from './nav.component';

describe('NavComponent', () => {
  let component: NavMicroComponent;
  let fixture: ComponentFixture<NavMicroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavMicroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavMicroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
