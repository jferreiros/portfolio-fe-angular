import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/models/project';
import { ProjectService } from 'src/services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  project?: Project;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.project = this.projectService.getProject(id);
  }

}
