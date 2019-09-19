import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import all views/pages (components)
import { ViewHomeComponent } from './views/view-home/view-home.component';
import { ViewProjectComponent } from './views/view-project/view-project.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth.guard';
import { ViewAboutComponent } from './views/view-about/view-about.component';
import { ViewEducationComponent } from './views/view-education/view-education.component';
import { ViewExperienceComponent } from './views/view-experience/view-experience.component';
import { ViewPortfolioComponent } from './views/view-portfolio/view-portfolio.component';

const routes: Routes = [
  { path: '', component : ViewHomeComponent },
  { path: 'about', component : ViewAboutComponent },
  { path: 'experience', component : ViewExperienceComponent },
  { path: 'education', component : ViewEducationComponent },
  { path: 'portfolio', component : ViewPortfolioComponent },
  { path: 'project/:id', component : ViewProjectComponent }, // with canActivate, we check the jwt before enter in that route
  { path: 'login', component : LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
