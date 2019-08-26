import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
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
    EducationItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
