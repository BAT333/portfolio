import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SharedDataServiceService } from '../../service/SharedDataService/shared-data-service.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  dataHeader:any
  constructor(private shared:SharedDataServiceService){
    this.getDataHeader()
  }
  toggleMenu() {
    const nav = document.querySelector('.navigation');
    nav?.classList.toggle('active');
  }

  private getDataHeader(){

    this.shared.personalData$.pipe(
      catchError(error => {
        console.error('Erro ao obter dados', error);
        return of (null); 
      }))
    .subscribe((data)=>
    this.dataHeader = data
    )
  }
}
