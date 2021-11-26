import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'basic-form',
    pathMatch: 'full',
  },
  {
    path: 'basic-form',
    component: BasicFormComponent,
  },
  {
    path: 'profile-editor',
    component: ProfileEditorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
