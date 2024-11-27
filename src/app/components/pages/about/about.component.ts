import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { skills } from '../../../models/skills';
import { SkillsService } from '../../../service/skills/skills.service';
import { SharedDataServiceService } from '../../../service/SharedDataService/shared-data-service.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  aboutDate:any;
  photosDate:any;

  constructor(private skillsSer:SkillsService, private shared:SharedDataServiceService){
    this.getSkill();
    this.getAboutData();
  }
  hardSkills: skills[] = [];

  softSkills: skills[] = [];

  currentSkills: skills[] = [];
  isShowingHardSkills = true;

  ngOnInit(): void {
    this.currentSkills = this.hardSkills;
  }

  getSkill(){
    this.skillsSer.getAll().subscribe(data=>{
      this.softSkills = data.softSkills; // Obtém a lista de "cadastros"
      this.hardSkills = data.hardSkills;   
    });
  }

  // Alterna entre Hard Skills e Soft Skills manualmente
  switchSkills(skillType: 'hard' | 'soft') {
    this.isShowingHardSkills = skillType === 'hard';
    this.currentSkills = this.isShowingHardSkills ? this.hardSkills : this.softSkills;
  }
  private getAboutData(){
    this.shared.aboutData$.pipe(
      catchError(error => {
        console.error('Erro ao obter dados', error);
        return of(null); 
      }))
    .subscribe((data)=>
    this.aboutDate = data
    )

    this.shared.aboutData$.pipe(
      catchError(error => {
        console.error('Erro ao obter dados', error);
        return of(null); 
      }))
    .subscribe((data)=>
    this.aboutDate = data
    ) 
    
    this.shared.photosData$.pipe(
      catchError(error => {
        console.error('Erro ao obter dados', error);
        return of(null); 
      }))
    .subscribe((data)=>
    this.photosDate = data
    )
  }
}
