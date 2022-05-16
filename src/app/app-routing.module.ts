import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { IndexCursoComponent } from './pages/index-curso/index-curso.component';
import { ProjectComponent } from './pages/project/project.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SkillsComponent } from './pages/skills/skills.component';

const routes: Routes = [
  { path: '',   redirectTo: 'home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'projects/index-curso', component: IndexCursoComponent },
  { path: 'projects/:id', component: ProjectComponent },
  // { path: '**', component: HomeComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
