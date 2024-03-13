import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Profile } from './profile.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private profiles: BehaviorSubject<Profile[]> = new BehaviorSubject<Profile[]>([]); 

  getProfiles(): Observable<Profile[]> {
    return this.profiles.asObservable();
  }

  addProfile(profile: Profile): void {
    const currentProfiles = this.profiles.getValue();
    this.profiles.next([...currentProfiles, profile]);
  }

  
  initializeProfiles(): void {
    this.profiles.next([
      { id: 1, name: 'Devang Shah', photoUrl:  'student1.jpeg', 
      description: 'I am Pursuing MCA.', address: '123 Kothrud Pune' },
      { id: 2, name: 'Anuj More', photoUrl: 'C:\Users\Lenovo\Desktop\Angular\bynry\student1.jpg', 
      description: 'I am a Angular Developer.', address: '456 Katraj Pune' },
      { id: 2, name: 'Prathmesh Kamble', photoUrl: 'C:\Users\Lenovo\Desktop\Angular\bynry\student1.jpg', 
      description: 'I am a React Developer.', address: '789 Bibewadi Pune' },
      { id: 2, name: 'Nikhil Thorghule', photoUrl: 'C:\Users\Lenovo\Desktop\Angular\bynrystudent1.jpg', 
      description: 'I am a Java Full Stack Developer.', address: '910 Shivne Pune' },
    ]);
  }
}
