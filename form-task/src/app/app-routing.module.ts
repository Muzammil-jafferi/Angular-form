import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserTemplateFormComponent } from './user-template-form/user-template-form.component';

const routes: Routes = [
  {
    path: 'user-form',
    component: UserFormComponent
  },
  {
    path: 'user-template-form',
    component: UserTemplateFormComponent
  },
  {
    path: 'user-details',
    component: UserCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
