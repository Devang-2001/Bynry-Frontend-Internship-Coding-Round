import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ProfileListComponent } from './profile-list/profile-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ProfileDetailsComponent,
    ProfileListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
