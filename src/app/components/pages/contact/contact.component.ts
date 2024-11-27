import { Component } from '@angular/core';
import { SharedDataServiceService } from '../../../service/SharedDataService/shared-data-service.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  personalData:any;
  contact:any;
  constructor(private shared:SharedDataServiceService){
    this.getContactData();

  }

  private getContactData(){
    this.shared.personalData$.pipe(
      catchError(error => {
        console.error('Erro ao obter dados', error);
        return of (null); 
      })
    ).subscribe(data=>{
      this.personalData = data;
    })

    this.shared.contactData$.pipe(
      catchError(error => {
        console.error('Erro ao obter dados', error);
        return of (null); 
      })
    ).subscribe(data=>{
      this.contact = data;
    })

  }
}
