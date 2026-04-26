import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocComponent } from './bloc-component';

describe('BlocComponent', () => {
  let component: BlocComponent;
  let fixture: ComponentFixture<BlocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlocComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BlocComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
