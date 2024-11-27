import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataServiceService {

  constructor() { }

  private homeDataSource = new BehaviorSubject<any>(null);
  private personalDataDataSource = new BehaviorSubject<any>(null);
  private photosDataSource = new BehaviorSubject<any>(null);
  private contactDataSource = new BehaviorSubject<any>(null);
  private projectDataSource = new BehaviorSubject<any>(null);
  private aboutDataSource = new BehaviorSubject<any>(null);
  private endDataSource = new BehaviorSubject<any>(null);

  homeData$ = this.homeDataSource.asObservable();
  endData$ = this.endDataSource.asObservable();
  aboutData$ = this.aboutDataSource.asObservable();
  projectData$ = this.projectDataSource.asObservable();
  contactData$ = this.contactDataSource.asObservable();
  photosData$ = this.photosDataSource.asObservable();
  personalData$ = this.personalDataDataSource.asObservable();

  // Função para atualizar os dados
  setHomeData(data: any) {
    this.homeDataSource.next(data);
  }
  setEndData(data: any) {
    this.endDataSource.next(data);
  }
  setAboutData(data: any) {
    this.aboutDataSource.next(data);
  }
  setProjectData(data: any) {
    this.projectDataSource.next(data);
  }
  setContactData(data: any) {
    this.contactDataSource.next(data);
  }
  setPhotosData(data: any) {
    this.photosDataSource.next(data);
  }
  setPersonalData(data: any) {
    this.personalDataDataSource.next(data);
  }
}
