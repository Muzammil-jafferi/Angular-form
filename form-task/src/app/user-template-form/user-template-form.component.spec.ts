import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTemplateFormComponent } from './user-template-form.component';

describe('UserTemplateFormComponent', () => {
  let component: UserTemplateFormComponent;
  let fixture: ComponentFixture<UserTemplateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTemplateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
