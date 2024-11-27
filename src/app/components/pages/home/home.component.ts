import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SharedDataServiceService } from '../../../service/SharedDataService/shared-data-service.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  homeData: any;
  photosData: any;


  constructor(private sharedDataService: SharedDataServiceService) { 
    this.getHomeData();
  }

  private getHomeData(){
    this.sharedDataService.homeData$.pipe(
      catchError(error => {
        console.error('Erro ao obter dados', error);
        return of(null); 
      })
    ).subscribe(data=>{
      this.homeData=data;
    });
    this.sharedDataService.photosData$.pipe(
      catchError(error => {
        console.error('Erro ao obter dados', error);
        return of(null); 
      })
    ).subscribe(data=>{
      this.photosData=data
    })
  }
}
