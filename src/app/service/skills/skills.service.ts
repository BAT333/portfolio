import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { skills } from '../../models/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private apiUrl = 'https://api.github.com/repos/BAT333/json/contents/skills.json';

  constructor(private http:HttpClient) { }

  getAll():Observable<{softSkills:skills[];hardSkills:skills[]}>{
    return this.http.get<any>(this.apiUrl).pipe(

      map((fileInfo:any)=>{
        const base64decoded = atob(fileInfo.content);
        const uint8Array= new Uint8Array(
          Array.from(base64decoded).map(char=>char.charCodeAt(0))
        );
        const content = new TextDecoder('utf-8').decode(uint8Array)
        return JSON.parse(content)
      })
    )

  }
}
