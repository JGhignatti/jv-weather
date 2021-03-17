import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatailedWeatherComponent } from './datailed-weather.component';

describe('DatailedWeatherComponent', () => {
  let component: DatailedWeatherComponent;
  let fixture: ComponentFixture<DatailedWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatailedWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatailedWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
