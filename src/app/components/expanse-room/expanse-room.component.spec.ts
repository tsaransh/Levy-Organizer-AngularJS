import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpanseRoomComponent } from './expanse-room.component';

describe('ExpanseRoomComponent', () => {
  let component: ExpanseRoomComponent;
  let fixture: ComponentFixture<ExpanseRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpanseRoomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpanseRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
