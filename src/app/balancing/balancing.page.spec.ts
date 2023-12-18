import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BalancingPage } from './balancing.page';

describe('BalancingPage', () => {
  let component: BalancingPage;
  let fixture: ComponentFixture<BalancingPage>;

  beforeEach(async () => {
    TestBed.overrideComponent(BalancingPage, {
      add: {
        imports: [RouterTestingModule]
      }
    });

    fixture = TestBed.createComponent(BalancingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
