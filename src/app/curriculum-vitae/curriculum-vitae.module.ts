import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurriculumVitaeRoutingModule } from './curriculum-vitae-routing.module';
import { CurriculumVitaeListComponent } from './pages/curriculum-vitae-list/curriculum-vitae-list.component';
import { CurriculumVitaeCreateComponent } from './pages/curriculum-vitae-create/curriculum-vitae-create.component';


@NgModule({
  declarations: [
    CurriculumVitaeListComponent,
    CurriculumVitaeCreateComponent
  ],
  imports: [
    CommonModule,
    CurriculumVitaeRoutingModule
  ]
})
export class CurriculumVitaeModule { }
