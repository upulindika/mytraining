import { Component } from '@angular/core';
import { MyserviceService } from './myservice/myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private mysvc: MyserviceService){
    console.log(MyserviceService);
  }
  title = 'testservice';
}
