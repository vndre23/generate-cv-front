import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurriculumVitaeListComponent } from './pages/curriculum-vitae-list/curriculum-vitae-list.component';
import { CurriculumVitaeCreateComponent } from './pages/curriculum-vitae-create/curriculum-vitae-create.component';

const routes: Routes = [
  {
    path: 'list',
    component: CurriculumVitaeListComponent,
  },
  {
    path: 'create',
    component: CurriculumVitaeCreateComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurriculumVitaeRoutingModule { }
