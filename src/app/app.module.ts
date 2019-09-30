import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// for Json Web Tokens
import { JwtModule } from '@auth0/angular-jwt'; 
import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth.guard';

import { AppComponent } from './app.component';
import { HeroHomeComponent } from './components/hero-home/hero-home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillComponent } from './components/skill/skill.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ExperienceItemComponent } from './components/experience-item/experience-item.component';
import { EducationComponent } from './components/education/education.component';
import { EducationItemComponent } from './components/education-item/education-item.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ViewHomeComponent } from './views/view-home/view-home.component';
import { ViewProjectComponent } from './views/view-project/view-project.component';
import { EditorComponent } from './components/editor/editor.component';
import { LoginComponent } from './components/login/login.component';
import { ViewAboutComponent } from './views/view-about/view-about.component';
import { ViewExperienceComponent } from './views/view-experience/view-experience.component';
import { ViewEducationComponent } from './views/view-education/view-education.component';
import { ViewPortfolioComponent } from './views/view-portfolio/view-portfolio.component';

// for JWT
export function tokenGetter(): string {
  return localStorage.getItem('access_token');
}


@NgModule({
  declarations: [
    AppComponent,
    HeroHomeComponent,
    NavbarComponent,
    AboutComponent,
    SkillsComponent,
    SkillComponent,
    ExperienceComponent,
    ExperienceItemComponent,
    EducationComponent,
    EducationItemComponent,
    PortfolioComponent,
    ContactComponent,
    ViewHomeComponent,
    FooterComponent,
    ViewProjectComponent,
    EditorComponent,
    LoginComponent,
    ViewAboutComponent,
    ViewExperienceComponent,
    ViewEducationComponent, 
    ViewPortfolioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    // for JWT
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['monjidev.com:3700', 'localhost:3700'], // TODO: change that when in production
        blacklistedRoutes: ['monjidev.com:3700/api/auth', 'monjidev.com:3700/api/send', 'localhost:3700/api/auth', 'localhost:3700/api/send']
      }
    })
  ],
  providers: [
    AuthService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
