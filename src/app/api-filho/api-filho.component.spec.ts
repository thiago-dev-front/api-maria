import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiFilhoComponent } from './api-filho.component';

describe('ApiFilhoComponent', () => {
  let component: ApiFilhoComponent;
  let fixture: ComponentFixture<ApiFilhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiFilhoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiFilhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
