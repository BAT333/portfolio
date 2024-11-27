import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { project } from '../../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = 'https://api.github.com/repos/BAT333/json/contents/project.json?ref=main';

  constructor(private http:HttpClient) { }

  getdate():Observable<project[]>{
    return this.http.get<project[]>(this.apiUrl).pipe(
      map((fileInfo: any) => {
        // Decodifica o conteúdo Base64 para Uint8Array
        const base64Decoded = atob(fileInfo.content);
        const uint8Array = new Uint8Array(
          Array.from(base64Decoded).map(char => char.charCodeAt(0))
        );

        // Usa TextDecoder para decodificar para UTF-8
        const content = new TextDecoder('utf-8').decode(uint8Array);

        // Converte o conteúdo UTF-8 decodificado em JSON
        return JSON.parse(content);
      })
    );
  }
}
