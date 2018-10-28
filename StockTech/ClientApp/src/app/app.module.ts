import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoListComponent } from './video-list/video-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModuleModule } from './material-module/material-module.module';

import { SidenavResponsiveComponent } from './sidenav-responsive/sidenav-responsive.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    SidenavResponsiveComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModuleModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  entryComponents: [SidenavResponsiveComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
