import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectService } from '../../../service/project/project.service';
import { project } from '../../../models/project';
import { SharedDataServiceService } from '../../../service/SharedDataService/shared-data-service.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  projectData:any;
  constructor(private proje:ProjectService, private shared:SharedDataServiceService){
    this.getprojects();
    this.getProjectsData();
  }
  projects:project[] = [];

  getprojects(){
    this.proje.getdate().subscribe((data:project[])=>{
      this.projects = data;
    });
  }

  private getProjectsData(){
    this.shared.projectData$.pipe(
      catchError(error => {
        console.error('Erro ao obter dados', error);
        return of(null); 
      }))
    .subscribe((data)=>
    this.projectData = data
    )
  }
}
