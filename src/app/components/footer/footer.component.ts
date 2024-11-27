import { Component } from '@angular/core';
import { SharedDataServiceService } from '../../service/SharedDataService/shared-data-service.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  personalData:any
  endData:any
  constructor(private shared:SharedDataServiceService){
    this.getFooterData()
  }

  private getFooterData(){
    this.shared.endData$.pipe(
      catchError(error => {
        console.error('Erro ao obter dados', error);
        return of(null); 
      }))
    .subscribe((data)=>
    this.endData = data
    )
  
    this.shared.personalData$.pipe(
      catchError(error => {
        console.error('Erro ao obter dados', error);
        return of(null); 
      }))
    .subscribe((data)=>
    this.personalData = data
    )
  }


  }


