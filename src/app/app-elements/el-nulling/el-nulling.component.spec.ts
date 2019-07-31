import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElNullingComponent } from './el-nulling.component';

describe('ElNullingComponent', () => {
  let component: ElNullingComponent;
  let fixture: ComponentFixture<ElNullingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElNullingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElNullingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
