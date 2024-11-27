import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { GeneralDataService } from './service/generalData/general-data.service';
import { SharedDataServiceService } from './service/SharedDataService/shared-data-service.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLinkActive, RouterLink, CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
  constructor(private servicedata:GeneralDataService,private sharedData:SharedDataServiceService
  ){
    this.getAll();
  }
  personalData : any;
  photos: any;
  contact: any;
  project : any;
  about: any;
  home: any;
  end : any;
  

  getAll(){
    this.servicedata.getInfos().subscribe(data => {
      this.sharedData.setHomeData(data.home);
      this.sharedData.setEndData(data.end);
      this.sharedData.setAboutData(data.about);
      this.sharedData.setProjectData(data.project);
      this.sharedData.setContactData(data.contact);
      this.sharedData.setPersonalData(data.personalData);
      this.sharedData.setPhotosData(data.photos);
    });
  }
}
