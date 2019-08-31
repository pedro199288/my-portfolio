import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
