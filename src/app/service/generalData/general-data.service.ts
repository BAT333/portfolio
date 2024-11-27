import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralDataService {

  private jsonUrl = 'https://api.github.com/repos/BAT333/json/contents/generalData.json'; // URL do JSON no GitHub

  constructor(private http: HttpClient) {}

  getInfos(): Observable<any> {
    return this.http.get<any>(this.jsonUrl).pipe(
      map((fileInfo: any) => {
        // Decodifica Base64
        const base64Decoded = atob(fileInfo.content);
        const uint8Array = new Uint8Array(
          Array.from(base64Decoded).map(char => char.charCodeAt(0))
        );

        // Decodifica UTF-8 e converte para JSON
        const content = new TextDecoder('utf-8').decode(uint8Array);
        return JSON.parse(content);
      })
    ); // Faz a requisição HTTP e retorna os dados
  }
}
