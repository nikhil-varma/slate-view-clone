import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndpointViewComponent } from './endpoint-view.component';

describe('EndpointViewComponent', () => {
  let component: EndpointViewComponent;
  let fixture: ComponentFixture<EndpointViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndpointViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndpointViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
