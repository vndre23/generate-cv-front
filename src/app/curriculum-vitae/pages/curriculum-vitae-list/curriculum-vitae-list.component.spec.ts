import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumVitaeListComponent } from './curriculum-vitae-list.component';

describe('CurriculumVitaeListComponent', () => {
  let component: CurriculumVitaeListComponent;
  let fixture: ComponentFixture<CurriculumVitaeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurriculumVitaeListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurriculumVitaeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
