import { Component, OnInit, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from 'src/models/project';
import { ProjectService } from 'src/services/project.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  
  // projects: Observable<Project[]> = of([]);
  projects: Project[] = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
    // this.getProjects();
  }

  getProjects() {
    // this.projectService.getProjects();
  }

}
