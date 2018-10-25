import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WorkExpComponent } from './work/work-exp/work-exp.component';
import { EducationComponent } from './education/education/education.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkExpComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
