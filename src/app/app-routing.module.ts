import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import all views/pages (components)
import { ViewHomeComponent } from './views/view-home/view-home.component';
import { ViewProjectComponent } from './views/view-project/view-project.component';

const routes: Routes = [
  { path: '', component : ViewHomeComponent },
  { path: 'project/:key', component : ViewProjectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
