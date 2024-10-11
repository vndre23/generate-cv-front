import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumVitaeCreateComponent } from './curriculum-vitae-create.component';

describe('CurriculumVitaeCreateComponent', () => {
  let component: CurriculumVitaeCreateComponent;
  let fixture: ComponentFixture<CurriculumVitaeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurriculumVitaeCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurriculumVitaeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
