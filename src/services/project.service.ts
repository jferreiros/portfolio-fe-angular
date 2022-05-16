import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PROJECTS } from 'src/mocks/mock-projects';
import { Project } from 'src/models/Project';

@Injectable({
    providedIn: 'root'
  })
  export class ProjectService {

    constructor() { }

    // getProjects(): Observable<Project[]> {
    //     const projects = of(PROJECTS);
    //     return projects;
    // }

    getProject(id: Number): Project | undefined{
      const project = PROJECTS.find(project => project.id == id);
      return project;
  }

    getProjects(): Project[] {
        const projects = PROJECTS;
        return projects;
    }

  }